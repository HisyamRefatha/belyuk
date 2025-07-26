'use client';

import { useMemo, useState } from 'react';
import {
    type ColumnDef,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    type PaginationState,
    type RowSelectionState,
    type SortingState,
    useReactTable,
} from '@tanstack/react-table';
import { Filter, Search, Settings2, X } from 'lucide-react';
import { Link } from 'react-router';
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardFooter,
    CardHeader,
    CardHeading,
    CardTable,
    CardToolbar
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { DataGrid, useDataGrid } from '@/components/ui/data-grid'
import { DataGridColumnHeader } from '@/components/ui/data-grid-column-header'
import { DataGridColumnVisibility } from '@/components/ui/data-grid-column-visibility'
import { DataGridPagination } from '@/components/ui/data-grid-pagination'
import {
    DataGridTable,
    DataGridTableRowSelect,
    DataGridTableRowSelectAll,
} from '@/components/ui/data-grid-table';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';

interface IData {
    Name: string;
    Price: number;
    Stock: number;
    ChurnRisk: number;
}

const productData: IData[] = [
    {
        Name: 'Digital NFT Artwork Collection',
        Price: 299.99,
        Stock: 15,
        ChurnRisk: 0.25
    },
    {
        Name: 'Premium Design Template Pack',
        Price: 49.99,
        Stock: 42,
        ChurnRisk: 0.85
    },
    {
        Name: 'Mobile App Plugin Suite',
        Price: 129.99,
        Stock: 28,
        ChurnRisk: 0.15
    },
    {
        Name: 'Standard Website Template',
        Price: 29.99,
        Stock: 67,
        ChurnRisk: 0.45
    },
    {
        Name: 'Premium Artwork Bundle',
        Price: 189.99,
        Stock: 33,
        ChurnRisk: 0.30
    },
    {
        Name: 'UI Widget Collection',
        Price: 39.99,
        Stock: 51,
        ChurnRisk: 0.75
    },
    {
        Name: 'Standard Plugin Package',
        Price: 19.99,
        Stock: 89,
        ChurnRisk: 0.60
    },
    {
        Name: 'NFT Template Designer',
        Price: 79.99,
        Stock: 22,
        ChurnRisk: 0.90
    },
    {
        Name: 'Premium App Development Kit',
        Price: 249.99,
        Stock: 18,
        ChurnRisk: 0.20
    },
    {
        Name: 'Design System Components',
        Price: 159.99,
        Stock: 37,
        ChurnRisk: 0.35
    },
    {
        Name: 'Trial Mobile Framework',
        Price: 9.99,
        Stock: 95,
        ChurnRisk: 0.80
    },
    {
        Name: 'Premium Template Bundle',
        Price: 199.99,
        Stock: 26,
        ChurnRisk: 0.25
    },
    {
        Name: 'Standard Artwork Collection',
        Price: 59.99,
        Stock: 44,
        ChurnRisk: 0.55
    },
    {
        Name: 'Widget Development Tools',
        Price: 89.99,
        Stock: 31,
        ChurnRisk: 0.70
    },
    {
        Name: 'Template Design Studio',
        Price: 149.99,
        Stock: 19,
        ChurnRisk: 0.40
    },
    {
        Name: 'Premium Plugin Framework',
        Price: 279.99,
        Stock: 12,
        ChurnRisk: 0.15
    },
    {
        Name: 'NFT Creation Platform',
        Price: 99.99,
        Stock: 35,
        ChurnRisk: 0.65
    },
    {
        Name: 'Standard Plugin Tools',
        Price: 34.99,
        Stock: 58,
        ChurnRisk: 0.50
    },
    {
        Name: 'Premium Design Assets',
        Price: 219.99,
        Stock: 21,
        ChurnRisk: 0.10
    },
    {
        Name: 'Template Marketplace Kit',
        Price: 69.99,
        Stock: 46,
        ChurnRisk: 0.85
    },
    {
        Name: 'Standard App Components',
        Price: 24.99,
        Stock: 73,
        ChurnRisk: 0.45
    },
    {
        Name: 'Premium Widget Suite',
        Price: 179.99,
        Stock: 29,
        ChurnRisk: 0.20
    },
    {
        Name: 'NFT Trading Platform',
        Price: 119.99,
        Stock: 16,
        ChurnRisk: 0.75
    },
    {
        Name: 'Standard Artwork Tools',
        Price: 44.99,
        Stock: 52,
        ChurnRisk: 0.60
    },
    {
        Name: 'Premium Plugin Collection',
        Price: 259.99,
        Stock: 14,
        ChurnRisk: 0.25
    },
    {
        Name: 'Template Builder Pro',
        Price: 139.99,
        Stock: 38,
        ChurnRisk: 0.80
    },
    {
        Name: 'Standard Design Pack',
        Price: 54.99,
        Stock: 49,
        ChurnRisk: 0.35
    },
    {
        Name: 'Premium Artwork Studio',
        Price: 289.99,
        Stock: 11,
        ChurnRisk: 0.15
    },
    {
        Name: 'Widget Creator Suite',
        Price: 74.99,
        Stock: 41,
        ChurnRisk: 0.90
    },
    {
        Name: 'Standard Plugin Builder',
        Price: 39.99,
        Stock: 63,
        ChurnRisk: 0.55
    },
    {
        Name: 'Premium App Framework',
        Price: 349.99,
        Stock: 8,
        ChurnRisk: 0.10
    }
];

// Helper function to get stock status
const getStockStatus = (stock: number) => {
    if (stock <= 15) return 'Low Stock';
    if (stock <= 30) return 'Medium Stock';
    return 'In Stock';
};

// Helper function to get churn risk level
const getChurnRiskLevel = (churnRisk: number) => {
    if (churnRisk >= 0.7) return 'High Risk';
    if (churnRisk >= 0.4) return 'Medium Risk';
    return 'Low Risk';
};

const ProductsList = () => {
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 5,
    });
    const [sorting, setSorting] = useState<SortingState>([
        { id: 'name', desc: false },
    ]);
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
    const [sortOrder, setSortOrder] = useState<string>('latest');

    const filteredData = useMemo(() => {
        let filtered = productData;

        // Filter by stock status
        if (selectedStatuses.length > 0) {
            filtered = filtered.filter((item) => {
                const status = getStockStatus(item.Stock);
                return selectedStatuses.includes(status);
            });
        }

        // Filter by search query (case-insensitive)
        if (searchQuery) {
            const searchLower = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (item) =>
                    item.Name.toLowerCase().includes(searchLower) ||
                    item.Price.toString().includes(searchLower) ||
                    item.Stock.toString().includes(searchLower)
            );
        }

        // Apply sorting based on sortOrder
        if (sortOrder === 'latest') {
            filtered = [...filtered].sort((a, b) => b.Price - a.Price);
        } else if (sortOrder === 'older') {
            filtered = [...filtered].sort((a, b) => a.Price - b.Price);
        } else if (sortOrder === 'stock') {
            filtered = [...filtered].sort((a, b) => b.Stock - a.Stock);
        }

        return filtered;
    }, [searchQuery, selectedStatuses, sortOrder]);

    const statusCounts = useMemo(() => {
        return productData.reduce(
            (acc, item) => {
                const status = getStockStatus(item.Stock);
                acc[status] = (acc[status] || 0) + 1;
                return acc;
            },
            {} as Record<string, number>,
        );
    }, []);

    const handleStatusChange = (checked: boolean, value: string) => {
        setSelectedStatuses((prev = []) =>
            checked ? [...prev, value] : prev.filter((v) => v !== value),
        );
    };

    const columns = useMemo<ColumnDef<IData>[]>(
        () => [
            {
                id: 'name',
                accessorFn: (row) => row.Name,
                header: ({ column }) => (
                    <DataGridColumnHeader title="Product Name" column={column} className="dark:text-[#1a282d]" />
                ),
                cell: ({ row }) => (
                    <div className="flex items-center gap-2.5">
                        <div className="flex flex-col">
                            <Link
                                className="font-medium text-mono dark:text-[#1a282d] hover:text-primary-active mb-px"
                                to="#"
                            >
                                {row.original.Name}
                            </Link>
                            <span className="text-sm text-secondary-foreground dark:text-[#1a282d]">
                                {getChurnRiskLevel(row.original.ChurnRisk)}
                            </span>
                        </div>
                    </div>
                ),
                enableSorting: true,
                size: 300,
                meta: {
                    headerClassName: '',
                },
            },
            {
                id: 'price',
                accessorFn: (row) => row.Price,
                header: ({ column }) => (
                    <DataGridColumnHeader title="Price" column={column} className="dark:text-[#1a282d]" />
                ),
                cell: ({ row }) => (
                    <span className="font-medium text-foreground">
                        ${row.original.Price.toFixed(2)}
                    </span>
                ),
                enableSorting: true,
                size: 120,
                meta: {
                    headerClassName: '',
                },
            },
            {
                id: 'stock',
                accessorFn: (row) => row.Stock,
                header: ({ column }) => (
                    <DataGridColumnHeader title="Stock" column={column} className="dark:text-[#1a282d]" />
                ),
                cell: ({ row }) => (
                    <div className="flex flex-col">
                        <span className="text-sm text-foreground font-medium">
                            {row.original.Stock} units
                        </span>
                        <Badge
                            size="sm"
                            variant={row.original.Stock <= 15 ? "destructive" : row.original.Stock <= 30 ? "default" : "secondary"}
                            appearance="solid"
                        >
                            {getStockStatus(row.original.Stock)}
                        </Badge>
                    </div>
                ),
                enableSorting: true,
                size: 150,
                meta: {
                    headerClassName: '',
                },
            },
            {
                id: 'churnRisk',
                accessorFn: (row) => row.ChurnRisk,
                header: ({ column }) => (
                    <DataGridColumnHeader title="Churn Risk" column={column} className="dark:text-[#1a282d]" />
                ),
                cell: ({ row }) => (
                    <div className="flex flex-col">
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                            <div
                                className={`h-2 rounded-full ${row.original.ChurnRisk >= 0.7 ? 'bg-red-500' :
                                        row.original.ChurnRisk >= 0.4 ? 'bg-yellow-500' : 'bg-green-500'
                                    }`}
                                style={{ width: `${row.original.ChurnRisk * 100}%` }}
                            ></div>
                        </div>
                        <span className="text-xs text-secondary-foreground">
                            {(row.original.ChurnRisk * 100).toFixed(0)}%
                        </span>
                    </div>
                ),
                enableSorting: true,
                size: 150,
                meta: {
                    headerClassName: '',
                },
            },
            {
                id: 'value',
                accessorFn: (row) => row.Price * row.Stock,
                header: ({ column }) => (
                    <DataGridColumnHeader title="Total Value" column={column} className="dark:text-[#1a282d]" />
                ),
                cell: ({ row }) => (
                    <span className="text-foreground font-medium">
                        ${(row.original.Price * row.original.Stock).toFixed(2)}
                    </span>
                ),
                enableSorting: true,
                size: 150,
                meta: {
                    headerClassName: '',
                },
            },
            {
                id: 'actions',
                header: ({ column }) => (
                    <DataGridColumnHeader title="Actions" column={column} className="dark:text-[#1a282d]" />
                ),
                enableSorting: false,
                cell: () => {
                    return (
                        <div className="flex gap-2">
                            <Button mode="link" underlined="dashed" size="sm">
                                Edit
                            </Button>
                            <Button mode="link" underlined="dashed" size="sm" variant="destructive">
                                Delete
                            </Button>
                        </div>
                    );
                },
                size: 120,
            },
        ],
        [],
    );

    const table = useReactTable({
        columns,
        data: filteredData,
        pageCount: Math.ceil((filteredData?.length || 0) / pagination.pageSize),
        getRowId: (row: IData, index: number) => String(index),
        state: {
            pagination,
            sorting,
            rowSelection,
        },
        columnResizeMode: 'onChange',
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    const Toolbar = () => {
        const { table } = useDataGrid();

        return (
            <CardToolbar>
                <Button>
                    <Settings2 size={16} />
                    Filters
                </Button>
                <DataGridColumnVisibility
                    table={table}
                    trigger={
                        <Button variant="outline">
                            <Settings2 />
                            Columns
                        </Button>
                    }
                />
            </CardToolbar>
        );
    };

    return (
        <DataGrid
            tableClassNames={{
                headerRow: 'dark:bg-white',
                edgeCell: 'dark:border-[#eeeaeb]',
                cellBorder: 'dark:border-[#eeeaeb]',
            }}
            table={table}
            recordCount={filteredData?.length || 0}
            tableLayout={{
                columnsPinnable: true,
                columnsMovable: true,
                columnsVisibility: true,
                cellBorder: true,
            }}
        >
            <Card className="overflow-hidden bg-white border border-gray-300">
                <CardTable>
                    <ScrollArea>
                        <DataGridTable />
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </CardTable>
                <CardFooter>
                    <DataGridPagination />
                </CardFooter>
            </Card>
        </DataGrid>
    );
};

export { ProductsList };