cube(`EFkrSubfun`, {
    sql_table: `cons_dict.e_fkr_subfun`,
    title: 'Function subgroups Codes',
    description: 'Codes for Function subgroups classification',
    measures: {
        count: {
            type: `count`,
        }
    },
    dimensions: {
        id: {
            sql: `id`,
            type: `number`,
            primaryKey: true
        },
        code: {
            title: `Function subgroup Code`,
            description: `Function subgroup Code Description`,
            sql: `code`,
            type: `string`
        },
        nameRu: {
            sql: `name_ru`,
            type: `string`
        }
    }
});