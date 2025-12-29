cube(`ERegion`, {
    sql_table: `cons_dict.e_region`,
    title: 'Region code and KATO',
    description: 'Codes for Region code and KATO classification',
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
        regionCode: {
            title: `Region Code`,
            sql: `region_code`,
            type: `string`
        },
        kato: {
            title: `KATO`,
            sql: `kato`,
            type: `string`
        },
        nameRu: {
            sql: `name_ru`,
            type: `string`
        }
    }
});
