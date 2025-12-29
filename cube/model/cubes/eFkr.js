cube(`EFkr`, {
    sql_table: `cons_dict.e_fkr`,
    joins: {
        EAbp: {
            relationship: `many_to_one`,
            sql: `${EFkr}.abp_id = ${EAbp}.id`
        },
        EFkrFun: {
            relationship: `many_to_one`,
            sql: `${EFkr}.fun_id = ${EFkrFun}.id`
        },
        EFkrSubfun: {
            relationship: `many_to_one`,
            sql: `${EFkr}.subfun_id = ${EFkrSubfun}.id`
        },
        EFkrPrg: {
            relationship: `many_to_one`,
            sql: `${EFkr}.prg_id = ${EFkrPrg}.id`
        },
        EFkrPprg: {
            relationship: `many_to_one`,
            sql: `${EFkr}.pprg_id = ${EFkrPprg}.id`
        }
    },
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
            sql: `code`,
            type: `string`
        }
    }
});