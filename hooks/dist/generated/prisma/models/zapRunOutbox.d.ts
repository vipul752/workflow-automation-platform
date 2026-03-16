import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model zapRunOutbox
 *
 */
export type zapRunOutboxModel = runtime.Types.Result.DefaultSelection<Prisma.$zapRunOutboxPayload>;
export type AggregateZapRunOutbox = {
    _count: ZapRunOutboxCountAggregateOutputType | null;
    _min: ZapRunOutboxMinAggregateOutputType | null;
    _max: ZapRunOutboxMaxAggregateOutputType | null;
};
export type ZapRunOutboxMinAggregateOutputType = {
    id: string | null;
    zapRunId: string | null;
};
export type ZapRunOutboxMaxAggregateOutputType = {
    id: string | null;
    zapRunId: string | null;
};
export type ZapRunOutboxCountAggregateOutputType = {
    id: number;
    zapRunId: number;
    _all: number;
};
export type ZapRunOutboxMinAggregateInputType = {
    id?: true;
    zapRunId?: true;
};
export type ZapRunOutboxMaxAggregateInputType = {
    id?: true;
    zapRunId?: true;
};
export type ZapRunOutboxCountAggregateInputType = {
    id?: true;
    zapRunId?: true;
    _all?: true;
};
export type ZapRunOutboxAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which zapRunOutbox to aggregate.
     */
    where?: Prisma.zapRunOutboxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of zapRunOutboxes to fetch.
     */
    orderBy?: Prisma.zapRunOutboxOrderByWithRelationInput | Prisma.zapRunOutboxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.zapRunOutboxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` zapRunOutboxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` zapRunOutboxes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned zapRunOutboxes
    **/
    _count?: true | ZapRunOutboxCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ZapRunOutboxMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ZapRunOutboxMaxAggregateInputType;
};
export type GetZapRunOutboxAggregateType<T extends ZapRunOutboxAggregateArgs> = {
    [P in keyof T & keyof AggregateZapRunOutbox]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateZapRunOutbox[P]> : Prisma.GetScalarType<T[P], AggregateZapRunOutbox[P]>;
};
export type zapRunOutboxGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.zapRunOutboxWhereInput;
    orderBy?: Prisma.zapRunOutboxOrderByWithAggregationInput | Prisma.zapRunOutboxOrderByWithAggregationInput[];
    by: Prisma.ZapRunOutboxScalarFieldEnum[] | Prisma.ZapRunOutboxScalarFieldEnum;
    having?: Prisma.zapRunOutboxScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ZapRunOutboxCountAggregateInputType | true;
    _min?: ZapRunOutboxMinAggregateInputType;
    _max?: ZapRunOutboxMaxAggregateInputType;
};
export type ZapRunOutboxGroupByOutputType = {
    id: string;
    zapRunId: string;
    _count: ZapRunOutboxCountAggregateOutputType | null;
    _min: ZapRunOutboxMinAggregateOutputType | null;
    _max: ZapRunOutboxMaxAggregateOutputType | null;
};
type GetZapRunOutboxGroupByPayload<T extends zapRunOutboxGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ZapRunOutboxGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ZapRunOutboxGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ZapRunOutboxGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ZapRunOutboxGroupByOutputType[P]>;
}>>;
export type zapRunOutboxWhereInput = {
    AND?: Prisma.zapRunOutboxWhereInput | Prisma.zapRunOutboxWhereInput[];
    OR?: Prisma.zapRunOutboxWhereInput[];
    NOT?: Prisma.zapRunOutboxWhereInput | Prisma.zapRunOutboxWhereInput[];
    id?: Prisma.StringFilter<"zapRunOutbox"> | string;
    zapRunId?: Prisma.StringFilter<"zapRunOutbox"> | string;
    zapRun?: Prisma.XOR<Prisma.ZapRunScalarRelationFilter, Prisma.zapRunWhereInput>;
};
export type zapRunOutboxOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    zapRunId?: Prisma.SortOrder;
    zapRun?: Prisma.zapRunOrderByWithRelationInput;
};
export type zapRunOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    zapRunId?: string;
    AND?: Prisma.zapRunOutboxWhereInput | Prisma.zapRunOutboxWhereInput[];
    OR?: Prisma.zapRunOutboxWhereInput[];
    NOT?: Prisma.zapRunOutboxWhereInput | Prisma.zapRunOutboxWhereInput[];
    zapRun?: Prisma.XOR<Prisma.ZapRunScalarRelationFilter, Prisma.zapRunWhereInput>;
}, "id" | "zapRunId">;
export type zapRunOutboxOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    zapRunId?: Prisma.SortOrder;
    _count?: Prisma.zapRunOutboxCountOrderByAggregateInput;
    _max?: Prisma.zapRunOutboxMaxOrderByAggregateInput;
    _min?: Prisma.zapRunOutboxMinOrderByAggregateInput;
};
export type zapRunOutboxScalarWhereWithAggregatesInput = {
    AND?: Prisma.zapRunOutboxScalarWhereWithAggregatesInput | Prisma.zapRunOutboxScalarWhereWithAggregatesInput[];
    OR?: Prisma.zapRunOutboxScalarWhereWithAggregatesInput[];
    NOT?: Prisma.zapRunOutboxScalarWhereWithAggregatesInput | Prisma.zapRunOutboxScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"zapRunOutbox"> | string;
    zapRunId?: Prisma.StringWithAggregatesFilter<"zapRunOutbox"> | string;
};
export type zapRunOutboxCreateInput = {
    id?: string;
    zapRun: Prisma.zapRunCreateNestedOneWithoutZapRunOutboxInput;
};
export type zapRunOutboxUncheckedCreateInput = {
    id?: string;
    zapRunId: string;
};
export type zapRunOutboxUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zapRun?: Prisma.zapRunUpdateOneRequiredWithoutZapRunOutboxNestedInput;
};
export type zapRunOutboxUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zapRunId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type zapRunOutboxCreateManyInput = {
    id?: string;
    zapRunId: string;
};
export type zapRunOutboxUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type zapRunOutboxUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zapRunId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ZapRunOutboxNullableScalarRelationFilter = {
    is?: Prisma.zapRunOutboxWhereInput | null;
    isNot?: Prisma.zapRunOutboxWhereInput | null;
};
export type zapRunOutboxCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zapRunId?: Prisma.SortOrder;
};
export type zapRunOutboxMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zapRunId?: Prisma.SortOrder;
};
export type zapRunOutboxMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zapRunId?: Prisma.SortOrder;
};
export type zapRunOutboxCreateNestedOneWithoutZapRunInput = {
    create?: Prisma.XOR<Prisma.zapRunOutboxCreateWithoutZapRunInput, Prisma.zapRunOutboxUncheckedCreateWithoutZapRunInput>;
    connectOrCreate?: Prisma.zapRunOutboxCreateOrConnectWithoutZapRunInput;
    connect?: Prisma.zapRunOutboxWhereUniqueInput;
};
export type zapRunOutboxUncheckedCreateNestedOneWithoutZapRunInput = {
    create?: Prisma.XOR<Prisma.zapRunOutboxCreateWithoutZapRunInput, Prisma.zapRunOutboxUncheckedCreateWithoutZapRunInput>;
    connectOrCreate?: Prisma.zapRunOutboxCreateOrConnectWithoutZapRunInput;
    connect?: Prisma.zapRunOutboxWhereUniqueInput;
};
export type zapRunOutboxUpdateOneWithoutZapRunNestedInput = {
    create?: Prisma.XOR<Prisma.zapRunOutboxCreateWithoutZapRunInput, Prisma.zapRunOutboxUncheckedCreateWithoutZapRunInput>;
    connectOrCreate?: Prisma.zapRunOutboxCreateOrConnectWithoutZapRunInput;
    upsert?: Prisma.zapRunOutboxUpsertWithoutZapRunInput;
    disconnect?: Prisma.zapRunOutboxWhereInput | boolean;
    delete?: Prisma.zapRunOutboxWhereInput | boolean;
    connect?: Prisma.zapRunOutboxWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.zapRunOutboxUpdateToOneWithWhereWithoutZapRunInput, Prisma.zapRunOutboxUpdateWithoutZapRunInput>, Prisma.zapRunOutboxUncheckedUpdateWithoutZapRunInput>;
};
export type zapRunOutboxUncheckedUpdateOneWithoutZapRunNestedInput = {
    create?: Prisma.XOR<Prisma.zapRunOutboxCreateWithoutZapRunInput, Prisma.zapRunOutboxUncheckedCreateWithoutZapRunInput>;
    connectOrCreate?: Prisma.zapRunOutboxCreateOrConnectWithoutZapRunInput;
    upsert?: Prisma.zapRunOutboxUpsertWithoutZapRunInput;
    disconnect?: Prisma.zapRunOutboxWhereInput | boolean;
    delete?: Prisma.zapRunOutboxWhereInput | boolean;
    connect?: Prisma.zapRunOutboxWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.zapRunOutboxUpdateToOneWithWhereWithoutZapRunInput, Prisma.zapRunOutboxUpdateWithoutZapRunInput>, Prisma.zapRunOutboxUncheckedUpdateWithoutZapRunInput>;
};
export type zapRunOutboxCreateWithoutZapRunInput = {
    id?: string;
};
export type zapRunOutboxUncheckedCreateWithoutZapRunInput = {
    id?: string;
};
export type zapRunOutboxCreateOrConnectWithoutZapRunInput = {
    where: Prisma.zapRunOutboxWhereUniqueInput;
    create: Prisma.XOR<Prisma.zapRunOutboxCreateWithoutZapRunInput, Prisma.zapRunOutboxUncheckedCreateWithoutZapRunInput>;
};
export type zapRunOutboxUpsertWithoutZapRunInput = {
    update: Prisma.XOR<Prisma.zapRunOutboxUpdateWithoutZapRunInput, Prisma.zapRunOutboxUncheckedUpdateWithoutZapRunInput>;
    create: Prisma.XOR<Prisma.zapRunOutboxCreateWithoutZapRunInput, Prisma.zapRunOutboxUncheckedCreateWithoutZapRunInput>;
    where?: Prisma.zapRunOutboxWhereInput;
};
export type zapRunOutboxUpdateToOneWithWhereWithoutZapRunInput = {
    where?: Prisma.zapRunOutboxWhereInput;
    data: Prisma.XOR<Prisma.zapRunOutboxUpdateWithoutZapRunInput, Prisma.zapRunOutboxUncheckedUpdateWithoutZapRunInput>;
};
export type zapRunOutboxUpdateWithoutZapRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type zapRunOutboxUncheckedUpdateWithoutZapRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type zapRunOutboxSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    zapRunId?: boolean;
    zapRun?: boolean | Prisma.zapRunDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zapRunOutbox"]>;
export type zapRunOutboxSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    zapRunId?: boolean;
    zapRun?: boolean | Prisma.zapRunDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zapRunOutbox"]>;
export type zapRunOutboxSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    zapRunId?: boolean;
    zapRun?: boolean | Prisma.zapRunDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zapRunOutbox"]>;
export type zapRunOutboxSelectScalar = {
    id?: boolean;
    zapRunId?: boolean;
};
export type zapRunOutboxOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "zapRunId", ExtArgs["result"]["zapRunOutbox"]>;
export type zapRunOutboxInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zapRun?: boolean | Prisma.zapRunDefaultArgs<ExtArgs>;
};
export type zapRunOutboxIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zapRun?: boolean | Prisma.zapRunDefaultArgs<ExtArgs>;
};
export type zapRunOutboxIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zapRun?: boolean | Prisma.zapRunDefaultArgs<ExtArgs>;
};
export type $zapRunOutboxPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "zapRunOutbox";
    objects: {
        zapRun: Prisma.$zapRunPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        zapRunId: string;
    }, ExtArgs["result"]["zapRunOutbox"]>;
    composites: {};
};
export type zapRunOutboxGetPayload<S extends boolean | null | undefined | zapRunOutboxDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$zapRunOutboxPayload, S>;
export type zapRunOutboxCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<zapRunOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ZapRunOutboxCountAggregateInputType | true;
};
export interface zapRunOutboxDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['zapRunOutbox'];
        meta: {
            name: 'zapRunOutbox';
        };
    };
    /**
     * Find zero or one ZapRunOutbox that matches the filter.
     * @param {zapRunOutboxFindUniqueArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends zapRunOutboxFindUniqueArgs>(args: Prisma.SelectSubset<T, zapRunOutboxFindUniqueArgs<ExtArgs>>): Prisma.Prisma__zapRunOutboxClient<runtime.Types.Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ZapRunOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {zapRunOutboxFindUniqueOrThrowArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends zapRunOutboxFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, zapRunOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__zapRunOutboxClient<runtime.Types.Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ZapRunOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunOutboxFindFirstArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends zapRunOutboxFindFirstArgs>(args?: Prisma.SelectSubset<T, zapRunOutboxFindFirstArgs<ExtArgs>>): Prisma.Prisma__zapRunOutboxClient<runtime.Types.Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ZapRunOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunOutboxFindFirstOrThrowArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends zapRunOutboxFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, zapRunOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__zapRunOutboxClient<runtime.Types.Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ZapRunOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapRunOutboxes
     * const zapRunOutboxes = await prisma.zapRunOutbox.findMany()
     *
     * // Get first 10 ZapRunOutboxes
     * const zapRunOutboxes = await prisma.zapRunOutbox.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const zapRunOutboxWithIdOnly = await prisma.zapRunOutbox.findMany({ select: { id: true } })
     *
     */
    findMany<T extends zapRunOutboxFindManyArgs>(args?: Prisma.SelectSubset<T, zapRunOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ZapRunOutbox.
     * @param {zapRunOutboxCreateArgs} args - Arguments to create a ZapRunOutbox.
     * @example
     * // Create one ZapRunOutbox
     * const ZapRunOutbox = await prisma.zapRunOutbox.create({
     *   data: {
     *     // ... data to create a ZapRunOutbox
     *   }
     * })
     *
     */
    create<T extends zapRunOutboxCreateArgs>(args: Prisma.SelectSubset<T, zapRunOutboxCreateArgs<ExtArgs>>): Prisma.Prisma__zapRunOutboxClient<runtime.Types.Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ZapRunOutboxes.
     * @param {zapRunOutboxCreateManyArgs} args - Arguments to create many ZapRunOutboxes.
     * @example
     * // Create many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends zapRunOutboxCreateManyArgs>(args?: Prisma.SelectSubset<T, zapRunOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ZapRunOutboxes and returns the data saved in the database.
     * @param {zapRunOutboxCreateManyAndReturnArgs} args - Arguments to create many ZapRunOutboxes.
     * @example
     * // Create many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ZapRunOutboxes and only return the `id`
     * const zapRunOutboxWithIdOnly = await prisma.zapRunOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends zapRunOutboxCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, zapRunOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ZapRunOutbox.
     * @param {zapRunOutboxDeleteArgs} args - Arguments to delete one ZapRunOutbox.
     * @example
     * // Delete one ZapRunOutbox
     * const ZapRunOutbox = await prisma.zapRunOutbox.delete({
     *   where: {
     *     // ... filter to delete one ZapRunOutbox
     *   }
     * })
     *
     */
    delete<T extends zapRunOutboxDeleteArgs>(args: Prisma.SelectSubset<T, zapRunOutboxDeleteArgs<ExtArgs>>): Prisma.Prisma__zapRunOutboxClient<runtime.Types.Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ZapRunOutbox.
     * @param {zapRunOutboxUpdateArgs} args - Arguments to update one ZapRunOutbox.
     * @example
     * // Update one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends zapRunOutboxUpdateArgs>(args: Prisma.SelectSubset<T, zapRunOutboxUpdateArgs<ExtArgs>>): Prisma.Prisma__zapRunOutboxClient<runtime.Types.Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ZapRunOutboxes.
     * @param {zapRunOutboxDeleteManyArgs} args - Arguments to filter ZapRunOutboxes to delete.
     * @example
     * // Delete a few ZapRunOutboxes
     * const { count } = await prisma.zapRunOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends zapRunOutboxDeleteManyArgs>(args?: Prisma.SelectSubset<T, zapRunOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ZapRunOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends zapRunOutboxUpdateManyArgs>(args: Prisma.SelectSubset<T, zapRunOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ZapRunOutboxes and returns the data updated in the database.
     * @param {zapRunOutboxUpdateManyAndReturnArgs} args - Arguments to update many ZapRunOutboxes.
     * @example
     * // Update many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ZapRunOutboxes and only return the `id`
     * const zapRunOutboxWithIdOnly = await prisma.zapRunOutbox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends zapRunOutboxUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, zapRunOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ZapRunOutbox.
     * @param {zapRunOutboxUpsertArgs} args - Arguments to update or create a ZapRunOutbox.
     * @example
     * // Update or create a ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.upsert({
     *   create: {
     *     // ... data to create a ZapRunOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapRunOutbox we want to update
     *   }
     * })
     */
    upsert<T extends zapRunOutboxUpsertArgs>(args: Prisma.SelectSubset<T, zapRunOutboxUpsertArgs<ExtArgs>>): Prisma.Prisma__zapRunOutboxClient<runtime.Types.Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ZapRunOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunOutboxCountArgs} args - Arguments to filter ZapRunOutboxes to count.
     * @example
     * // Count the number of ZapRunOutboxes
     * const count = await prisma.zapRunOutbox.count({
     *   where: {
     *     // ... the filter for the ZapRunOutboxes we want to count
     *   }
     * })
    **/
    count<T extends zapRunOutboxCountArgs>(args?: Prisma.Subset<T, zapRunOutboxCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ZapRunOutboxCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ZapRunOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZapRunOutboxAggregateArgs>(args: Prisma.Subset<T, ZapRunOutboxAggregateArgs>): Prisma.PrismaPromise<GetZapRunOutboxAggregateType<T>>;
    /**
     * Group by ZapRunOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunOutboxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends zapRunOutboxGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: zapRunOutboxGroupByArgs['orderBy'];
    } : {
        orderBy?: zapRunOutboxGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, zapRunOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapRunOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the zapRunOutbox model
     */
    readonly fields: zapRunOutboxFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for zapRunOutbox.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__zapRunOutboxClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    zapRun<T extends Prisma.zapRunDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.zapRunDefaultArgs<ExtArgs>>): Prisma.Prisma__zapRunClient<runtime.Types.Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the zapRunOutbox model
 */
export interface zapRunOutboxFieldRefs {
    readonly id: Prisma.FieldRef<"zapRunOutbox", 'String'>;
    readonly zapRunId: Prisma.FieldRef<"zapRunOutbox", 'String'>;
}
/**
 * zapRunOutbox findUnique
 */
export type zapRunOutboxFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: Prisma.zapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: Prisma.zapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapRunOutboxInclude<ExtArgs> | null;
    /**
     * Filter, which zapRunOutbox to fetch.
     */
    where: Prisma.zapRunOutboxWhereUniqueInput;
};
/**
 * zapRunOutbox findUniqueOrThrow
 */
export type zapRunOutboxFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: Prisma.zapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: Prisma.zapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapRunOutboxInclude<ExtArgs> | null;
    /**
     * Filter, which zapRunOutbox to fetch.
     */
    where: Prisma.zapRunOutboxWhereUniqueInput;
};
/**
 * zapRunOutbox findFirst
 */
export type zapRunOutboxFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: Prisma.zapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: Prisma.zapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapRunOutboxInclude<ExtArgs> | null;
    /**
     * Filter, which zapRunOutbox to fetch.
     */
    where?: Prisma.zapRunOutboxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of zapRunOutboxes to fetch.
     */
    orderBy?: Prisma.zapRunOutboxOrderByWithRelationInput | Prisma.zapRunOutboxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for zapRunOutboxes.
     */
    cursor?: Prisma.zapRunOutboxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` zapRunOutboxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` zapRunOutboxes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of zapRunOutboxes.
     */
    distinct?: Prisma.ZapRunOutboxScalarFieldEnum | Prisma.ZapRunOutboxScalarFieldEnum[];
};
/**
 * zapRunOutbox findFirstOrThrow
 */
export type zapRunOutboxFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: Prisma.zapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: Prisma.zapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapRunOutboxInclude<ExtArgs> | null;
    /**
     * Filter, which zapRunOutbox to fetch.
     */
    where?: Prisma.zapRunOutboxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of zapRunOutboxes to fetch.
     */
    orderBy?: Prisma.zapRunOutboxOrderByWithRelationInput | Prisma.zapRunOutboxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for zapRunOutboxes.
     */
    cursor?: Prisma.zapRunOutboxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` zapRunOutboxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` zapRunOutboxes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of zapRunOutboxes.
     */
    distinct?: Prisma.ZapRunOutboxScalarFieldEnum | Prisma.ZapRunOutboxScalarFieldEnum[];
};
/**
 * zapRunOutbox findMany
 */
export type zapRunOutboxFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: Prisma.zapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: Prisma.zapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapRunOutboxInclude<ExtArgs> | null;
    /**
     * Filter, which zapRunOutboxes to fetch.
     */
    where?: Prisma.zapRunOutboxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of zapRunOutboxes to fetch.
     */
    orderBy?: Prisma.zapRunOutboxOrderByWithRelationInput | Prisma.zapRunOutboxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing zapRunOutboxes.
     */
    cursor?: Prisma.zapRunOutboxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` zapRunOutboxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` zapRunOutboxes.
     */
    skip?: number;
    distinct?: Prisma.ZapRunOutboxScalarFieldEnum | Prisma.ZapRunOutboxScalarFieldEnum[];
};
/**
 * zapRunOutbox create
 */
export type zapRunOutboxCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: Prisma.zapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: Prisma.zapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapRunOutboxInclude<ExtArgs> | null;
    /**
     * The data needed to create a zapRunOutbox.
     */
    data: Prisma.XOR<Prisma.zapRunOutboxCreateInput, Prisma.zapRunOutboxUncheckedCreateInput>;
};
/**
 * zapRunOutbox createMany
 */
export type zapRunOutboxCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many zapRunOutboxes.
     */
    data: Prisma.zapRunOutboxCreateManyInput | Prisma.zapRunOutboxCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * zapRunOutbox createManyAndReturn
 */
export type zapRunOutboxCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: Prisma.zapRunOutboxSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: Prisma.zapRunOutboxOmit<ExtArgs> | null;
    /**
     * The data used to create many zapRunOutboxes.
     */
    data: Prisma.zapRunOutboxCreateManyInput | Prisma.zapRunOutboxCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapRunOutboxIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * zapRunOutbox update
 */
export type zapRunOutboxUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: Prisma.zapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: Prisma.zapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapRunOutboxInclude<ExtArgs> | null;
    /**
     * The data needed to update a zapRunOutbox.
     */
    data: Prisma.XOR<Prisma.zapRunOutboxUpdateInput, Prisma.zapRunOutboxUncheckedUpdateInput>;
    /**
     * Choose, which zapRunOutbox to update.
     */
    where: Prisma.zapRunOutboxWhereUniqueInput;
};
/**
 * zapRunOutbox updateMany
 */
export type zapRunOutboxUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update zapRunOutboxes.
     */
    data: Prisma.XOR<Prisma.zapRunOutboxUpdateManyMutationInput, Prisma.zapRunOutboxUncheckedUpdateManyInput>;
    /**
     * Filter which zapRunOutboxes to update
     */
    where?: Prisma.zapRunOutboxWhereInput;
    /**
     * Limit how many zapRunOutboxes to update.
     */
    limit?: number;
};
/**
 * zapRunOutbox updateManyAndReturn
 */
export type zapRunOutboxUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: Prisma.zapRunOutboxSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: Prisma.zapRunOutboxOmit<ExtArgs> | null;
    /**
     * The data used to update zapRunOutboxes.
     */
    data: Prisma.XOR<Prisma.zapRunOutboxUpdateManyMutationInput, Prisma.zapRunOutboxUncheckedUpdateManyInput>;
    /**
     * Filter which zapRunOutboxes to update
     */
    where?: Prisma.zapRunOutboxWhereInput;
    /**
     * Limit how many zapRunOutboxes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapRunOutboxIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * zapRunOutbox upsert
 */
export type zapRunOutboxUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: Prisma.zapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: Prisma.zapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapRunOutboxInclude<ExtArgs> | null;
    /**
     * The filter to search for the zapRunOutbox to update in case it exists.
     */
    where: Prisma.zapRunOutboxWhereUniqueInput;
    /**
     * In case the zapRunOutbox found by the `where` argument doesn't exist, create a new zapRunOutbox with this data.
     */
    create: Prisma.XOR<Prisma.zapRunOutboxCreateInput, Prisma.zapRunOutboxUncheckedCreateInput>;
    /**
     * In case the zapRunOutbox was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.zapRunOutboxUpdateInput, Prisma.zapRunOutboxUncheckedUpdateInput>;
};
/**
 * zapRunOutbox delete
 */
export type zapRunOutboxDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: Prisma.zapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: Prisma.zapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapRunOutboxInclude<ExtArgs> | null;
    /**
     * Filter which zapRunOutbox to delete.
     */
    where: Prisma.zapRunOutboxWhereUniqueInput;
};
/**
 * zapRunOutbox deleteMany
 */
export type zapRunOutboxDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which zapRunOutboxes to delete
     */
    where?: Prisma.zapRunOutboxWhereInput;
    /**
     * Limit how many zapRunOutboxes to delete.
     */
    limit?: number;
};
/**
 * zapRunOutbox without action
 */
export type zapRunOutboxDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: Prisma.zapRunOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: Prisma.zapRunOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapRunOutboxInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=zapRunOutbox.d.ts.map