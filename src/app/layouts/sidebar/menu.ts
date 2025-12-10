import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [

    // ========== TITLE ==========
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },


    // ========== DASHBOARD (ONLY ACTIVE) ==========
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARD.TEXT',
        icon: 'ph-gauge',
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARD.LIST.ANALYTICS',
                link: '/analytics',
                parentId: 2
            },
            {
                id: 4,
                label: 'MENUITEMS.DASHBOARD.LIST.CRM',
                link: '/crm',
                parentId: 2
            },
            {
                id: 5,
                label: 'MENUITEMS.DASHBOARD.LIST.ECOMMERCE',
                link: '/',
                parentId: 2
            },
            {
                id: 6,
                label: 'MENUITEMS.DASHBOARD.LIST.LEARNING',
                link: '/learning',
                parentId: 2
            },
            {
                id: 7,
                label: 'MENUITEMS.DASHBOARD.LIST.REALESTATE',
                link: '/real-estate',
                parentId: 2
            },
            {
                id: 8,
                label: 'upComingEvents',
                link: '/up-coming-events',
                parentId: 2
            },
            
        ]

        // ========== ME ==========


    },


    // ========== ME ==========
{
  id: 9,
  label: 'Me',
  icon: 'ph-user',
  subItems: [
    { id: 10, label: 'Attendance', link: '/attendance', parentId: 9 },
    { id: 11, label: 'Leave', link: '/leave', parentId: 9 },
    { id: 12, label: 'Performance', link: '/performance', parentId: 9 },
    { id: 13, label: 'Expenses', link: '/expenses', parentId: 9 },
    { id: 14, label: 'Apps', link: '/apps', parentId: 9 }
  ]
}


    // ============================================================
    //                ALL BELOW MENUS COMMENTED
    // ============================================================

    // {
    //     id: 8,
    //     label: 'MENUITEMS.APPS.TEXT',
    //     isTitle: true
    // },

    // {
    //     id: 9,
    //     label: 'MENUITEMS.APPS.LIST.CALENDAR',
    //     icon: 'ph-calendar',
    //     link: '/apps/calendar',
    //     parentId: 8
    // },

    // {
    //     id: 10,
    //     label: 'MENUITEMS.APPS.LIST.CHAT',
    //     icon: 'ph-chats',
    //     link: '/apps/chat',
    //     parentId: 8
    // },

    // {
    //     id: 11,
    //     label: 'MENUITEMS.APPS.LIST.EMAIL',
    //     icon: 'ph-envelope',
    //     link: '/apps/email',
    //     parentId: 8,
    // },

    // {
    //     id: 12,
    //     label: 'MENUITEMS.APPS.LIST.ECOMMERCE',
    //     icon: 'ph-storefront',
    //     parentId: 8,
    //     subItems: [
    //         {
    //             id: 13,
    //             label: 'MENUITEMS.APPS.LIST.PRODUCTS',
    //             link: '/ecommerce/products',
    //             parentId: 12
    //         },
    //         {
    //             id: 13,
    //             label: 'MENUITEMS.APPS.LIST.PRODUCTGRID',
    //             link: '/ecommerce/products-grid',
    //             parentId: 12
    //         },
    //         {
    //             id: 14,
    //             label: 'MENUITEMS.APPS.LIST.PRODUCTDETAILS',
    //             link: '/ecommerce/product-details',
    //             parentId: 12
    //         },
    //         {
    //             id: 15,
    //             label: 'MENUITEMS.APPS.LIST.CREATEPRODUCT',
    //             link: '/ecommerce/add-product',
    //             parentId: 12
    //         },
    //         {
    //             id: 16,
    //             label: 'MENUITEMS.APPS.LIST.ORDERS',
    //             link: '/ecommerce/orders',
    //             parentId: 12
    //         },
    //         {
    //             id: 17,
    //             label: 'MENUITEMS.APPS.LIST.ORDEROVERVIEW',
    //             link: '/ecommerce/order-overview',
    //             parentId: 12
    //         },
    //         {
    //             id: 18,
    //             label: 'MENUITEMS.APPS.LIST.CUSTOMERS',
    //             link: '/ecommerce/customers',
    //             parentId: 12
    //         },
    //         {
    //             id: 19,
    //             label: 'MENUITEMS.APPS.LIST.SHOPPINGCART',
    //             link: '/ecommerce/cart',
    //             parentId: 12
    //         },
    //         {
    //             id: 20,
    //             label: 'MENUITEMS.APPS.LIST.CHECKOUT',
    //             link: '/ecommerce/checkout',
    //             parentId: 12
    //         },
    //         {
    //             id: 21,
    //             label: 'MENUITEMS.APPS.LIST.SELLERS',
    //             link: '/ecommerce/sellers',
    //             parentId: 12
    //         },
    //         {
    //             id: 22,
    //             label: 'MENUITEMS.APPS.LIST.SELLEROVERVIEW',
    //             link: '/ecommerce/seller-overview',
    //             parentId: 12
    //         }
    //     ]
    // },

    // {
    //     id: 23,
    //     label: 'MENUITEMS.APPS.LIST.FILEMANAGER',
    //     icon: 'ph-folder-open',
    //     link: '/apps/file-manager',
    //     parentId: 8,
    // },

    // {
    //     id: 24,
    //     label: 'MENUITEMS.APPS.LIST.LEARNING',
    //     icon: 'ph-graduation-cap',
    //     parentId: 8,
    //     subItems: [
    //         // commented...
    //     ]
    // },

    // {
    //     id: 39,
    //     label: 'MENUITEMS.APPS.LIST.INVOICES',
    //     icon: 'ph-file-text',
    //     parentId: 8,
    //     subItems: [
    //         // commented...
    //     ]
    // },

    // { id: 60, label: 'MENUITEMS.PAGES.TEXT', isTitle: true },

    // {
    //     id: 61,
    //     label: 'MENUITEMS.AUTHENTICATION.TEXT',
    //     icon: 'ph-user-circle',
    //     subItems: [
    //         // commented...
    //     ]
    // },

    // {
    //     id: 75,
    //     label: 'MENUITEMS.EXTRAPAGES.TEXT',
    //     icon: 'ph-address-book',
    //     subItems: [
    //         // commented...
    //     ]
    // },

    // { id: 87, label: 'MENUITEMS.COMPONENTS.TEXT', isTitle: true },

    // { id: 88, label: 'MENUITEMS.BOOTSTRAPUI.TEXT', icon: "ph-bandaids", subItems: [/* commented */] },

    // { id: 112, label: 'MENUITEMS.ADVANCEUI.TEXT', icon: "ph-stack-simple", subItems: [/* commented */] },

    // { id: 120, label: 'MENUITEMS.CUSTOMUI.TEXT', badge: 'MENUITEMS.CUSTOMUI.BADGE', icon: "ph-wrench", subItems: [/* commented */] },

    // { id: 124, label: 'MENUITEMS.WIDGETS.TEXT', icon: "ph-paint-brush-broad", link: '/apps/widgets' },

    // { id: 125, label: 'MENUITEMS.FORMS.TEXT', icon: 'ri-file-list-3-line', subItems: [/* commented */] },

    // { id: 138, label: 'MENUITEMS.TABLES.TEXT', icon: 'ph-table', subItems: [/* commented */] },

    // { id: 142, label: 'MENUITEMS.CHARTS.TEXT', icon: 'ph-chart-pie-slice', subItems: [/* commented */] },

    // { id: 159, label: 'MENUITEMS.ICONS.TEXT', icon: 'ph-traffic-cone', subItems: [/* commented */] },

    // { id: 165, label: 'MENUITEMS.MAPS.TEXT', icon: 'ph-map-trifold', subItems: [/* commented */] },

    // { id: 168, label: 'MENUITEMS.MULTILEVEL.TEXT', icon: 'bi bi-share', subItems: [/* commented */] }

];
