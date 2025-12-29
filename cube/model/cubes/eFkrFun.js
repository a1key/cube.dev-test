cube(`EFkrFun`, {
    sql_table: `cons_dict.e_fkr_fun`,
    title: 'Function groups Codes',
    description: 'Codes for Function groups classification',
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
            title: `Function group Code`,
            description: `Function group Code Description`,
            sql: `code`,
            type: `string`
        },
        nameRu: {
            sql: `name_ru`,
            type: `string`
        }
    }
});