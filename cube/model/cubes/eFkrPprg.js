cube(`EFkrPprg`, {
    sql_table: `cons_dict.e_fkr_pprg`,
    title: 'Subprogram Codes',
    description: 'Codes for Subprogram classification',
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
            title: `Subprogram Code`,
            description: `Subprogram Code Description`,
            sql: `code`,
            type: `string`
        },
        nameRu: {
            sql: `name_ru`,
            type: `string`
        }
    }
});