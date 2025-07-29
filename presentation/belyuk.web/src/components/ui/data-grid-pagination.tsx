import { type ReactNode } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useDataGrid } from '@/components/ui/data-grid'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';

interface DataGridPaginationProps {
    sizes?: number[];
    sizesInfo?: string;
    sizesLabel?: string;
    sizesDescription?: string;
    sizesSkeleton?: ReactNode;
    more?: boolean;
    moreLimit?: number;
    info?: string;
    infoSkeleton?: ReactNode;
}

function DataGridPagination(props: DataGridPaginationProps) {
    const { table, recordCount, isLoading } = useDataGrid();

    const defaultProps: Partial<DataGridPaginationProps> = {
        sizes: [5, 10, 25, 50, 100],
        sizesLabel: 'Show',
        sizesDescription: 'per page',
        sizesSkeleton: <Skeleton className="h-8 w-44" />,
        moreLimit: 5,
        more: false,
        info: '{from} - {to} of {count}',
        infoSkeleton: <Skeleton className="h-8 w-60" />,
    };

    const mergedProps: DataGridPaginationProps = { ...defaultProps, ...props };

    const btnBaseClasses = 'size-7 p-0 text-sm';
    const btnArrowClasses = btnBaseClasses + ' rtl:transform rtl:rotate-180';
    const pageIndex = table.getState().pagination.pageIndex;
    const pageSize = table.getState().pagination.pageSize;
    const from = pageIndex * pageSize + 1;
    const to = Math.min((pageIndex + 1) * pageSize, recordCount);
    const pageCount = table.getPageCount();

    // Replace placeholders in paginationInfo
    const paginationInfo = mergedProps?.info
        ? mergedProps.info
            .replace('{from}', from.toString())
            .replace('{to}', to.toString())
            .replace('{count}', recordCount.toString())
        : `${from} - ${to} of ${recordCount}`;

    // Pagination limit logic
    const paginationMoreLimit = mergedProps?.moreLimit || 5;

    // Determine the start and end of the pagination group
    const currentGroupStart =
        Math.floor(pageIndex / paginationMoreLimit) * paginationMoreLimit;
    const currentGroupEnd = Math.min(
        currentGroupStart + paginationMoreLimit,
        pageCount,
    );

    // Render page buttons based on the current group
    const renderPageButtons = () => {
        const buttons = [];
        for (let i = currentGroupStart; i < currentGroupEnd; i++) {
            buttons.push(
                <Button
                    key={i}
                    size="sm"
                    mode="icon"
                    variant="ghost"
                    className={cn(btnBaseClasses, 'text-muted-foreground dark:hover:bg-[#f0fdf4] dark:hover:text-[#1a282d]', {
                        'bg-accent dark:bg-[#f0fdf4] text-accent-foreground dark:text-[#1a282d]': pageIndex === i,
                    })}
                    onClick={() => {
                        if (pageIndex !== i) {
                            table.setPageIndex(i);
                        }
                    }}
                >
                    {i + 1}
                </Button>,
            );
        }
        return buttons;
    };

    // Render a "previous" ellipsis button if there are previous pages to show
    const renderEllipsisPrevButton = () => {
        if (currentGroupStart > 0) {
            return (
                <Button
                    size="sm"
                    mode="icon"
                    className={cn(btnBaseClasses, 'dark:hover:bg-[#f0fdf4]')}
                    variant="ghost"
                    onClick={() => table.setPageIndex(currentGroupStart - 1)}
                >
                    ...
                </Button>
            );
        }
        return null;
    };

    // Render a "next" ellipsis button if there are more pages to show after the current group
    const renderEllipsisNextButton = () => {
        if (currentGroupEnd < pageCount) {
            return (
                <Button
                    className={cn(btnBaseClasses, 'dark:hover:bg-[#f0fdf4]')}
                    variant="ghost"
                    size="sm"
                    mode="icon"
                    onClick={() => table.setPageIndex(currentGroupEnd)}
                >
                    ...
                </Button>
            );
        }
        return null;
    };

    return (
        <div
            data-slot="data-grid-pagination"
            className="flex flex-wrap flex-col sm:flex-row justify-between items-center gap-2.5 py-2.5 sm:py-0 grow"
        >
            <div className="flex flex-wrap items-center space-x-2.5 pb-2.5 sm:pb-0 order-2 sm:order-1">
                {isLoading ? (
                    mergedProps?.sizesSkeleton
                ) : (
                    <>
                        <div className="text-sm text-muted-foreground">Rows per page</div>
                        <Select
                            value={`${pageSize}`}
                            indicatorPosition="right"
                            onValueChange={(value) => {
                                const newPageSize = Number(value);
                                table.setPageSize(newPageSize);
                            }}
                        >
                            <SelectTrigger className="w-fit h-8 dark:bg-[#fcf9fa] dark:border-[#e2e8f0] dark:text-[#1a282d]" size="sm">
                                <SelectValue placeholder={`${pageSize}`} />
                            </SelectTrigger>
                                <SelectContent side="top" className="min-w-[50px] dark:bg-[#fcf9fa] dark:border-[#e2e8f0]">
                                {mergedProps?.sizes?.map((size: number) => (
                                    <SelectItem key={size} value={`${size}`} className='dark:text-[#1a282d] dark:hover:bg-[#f0fdf4] dark:focus:bg-[#f0fdf4]'>
                                        {size}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </>
                )}
            </div>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-2.5 pt-2.5 sm:pt-0 order-1 sm:order-2">
                {isLoading ? (
                    mergedProps?.infoSkeleton
                ) : (
                    <>
                        <div className="text-sm text-muted-foreground text-nowrap order-2 sm:order-1">
                            {paginationInfo}
                        </div>
                        {pageCount > 1 && (
                            <div className="flex items-center space-x-1 order-1 sm:order-2">
                                <Button
                                    size="sm"
                                    mode="icon"
                                    variant="ghost"
                                    className={cn(btnArrowClasses, 'dark:hover:bg-[#f0fdf4] dark:hover:text-[#1a282d]')}
                                    onClick={() => table.previousPage()}
                                    disabled={!table.getCanPreviousPage()}
                                >
                                    <span className="sr-only">Go to previous page</span>
                                        <ChevronLeftIcon className="size-4" />
                                </Button>

                                {renderEllipsisPrevButton()}

                                {renderPageButtons()}

                                {renderEllipsisNextButton()}

                                <Button
                                    size="sm"
                                    mode="icon"
                                    variant="ghost"
                                    className={cn(btnArrowClasses, 'dark:hover:bg-[#f0fdf4] dark:hover:text-[#1a282d]')}
                                    onClick={() => table.nextPage()}
                                    disabled={!table.getCanNextPage()}
                                >
                                    <span className="sr-only">Go to next page</span>
                                        <ChevronRightIcon className="size-4" />
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export { DataGridPagination, type DataGridPaginationProps };