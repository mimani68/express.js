/**
 *
 * @description : car diagnostic system
 * @link        : http://sample.ir
 * @author      { Mahdi Imani }
 * @email       : imani.mahdi[a]gmail.com
 * @copyright   'xxx Co., Ltd.'
 *
 *
 * @version {1.0.0} - 2017/09/07 18:15
 * @version {1.0.1} - 2017/09/12 09:30
 *
 *
 */


// =====|  requirment  |===================================
var MongoClient  = require('mongodb').MongoClient;
var ObjectId     = require('mongodb').ObjectId;
var chalk        = require('chalk');
var _            = require('lodash');


// ===| 03 |=====| Configurations |==============================
/**
 *
 * @description SERVER configuration
 *
 */
var config       = require('../config/server.config');
var database_url = config.setConfig.database_url();




/*********************************************************
 *                                                       *
 *       01    Database Variable (MOCK)                  *
 *                                                       *
 *********************************************************/

// coperation
var account_id_2 = new ObjectId();
var corporation_id_1 = new ObjectId();
var user_id_2 = new ObjectId();
var user_id_3 = new ObjectId();
var wallet_id_2 = new ObjectId();
var vehicle_id_2 = new ObjectId();
var ecu_id_2 = new ObjectId();


// single
var account_id_1 = new ObjectId();
var user_id_1 = new ObjectId();
var vehicle_id_1 = new ObjectId();
var ecu_id_1 = new ObjectId();
var invoice_id_1 = new ObjectId();
var invoice_id_2 = new ObjectId();
var wallet_id_1 = new ObjectId();
var discount_id_1 = new ObjectId();
var discount_id_2 = new ObjectId();
var sos_request_id_1 = new ObjectId();
var activity_1 = new ObjectId();
var activity_2 = new ObjectId();
var diag_report_1 = new ObjectId();
var params_report_1 = new ObjectId();


// service center
var service_center_id_1 = new ObjectId();
var user_id_4 = new ObjectId();
var user_id_5 = new ObjectId();


// vitrin
var vitrin_id_1 = new ObjectId();
var vitrin_id_2 = new ObjectId();
var vitrin_id_3 = new ObjectId();
var vitrin_id_4 = new ObjectId();
var vitrin_id_5 = new ObjectId();
var vitrin_id_6 = new ObjectId();
var vitrin_id_7 = new ObjectId();
var vitrin_id_8 = new ObjectId();
var vitrin_id_9 = new ObjectId();


//  vehicle database
var vehicle_db_1 = new ObjectId();
var vehicle_db_2 = new ObjectId();


// model
var user = [
    {
        "_id": user_id_1,
        "first_name": "مهدی",
        "last_name": "ایمانی",
        "gender": "مرد",
        "portrait": ["../img/i8g665gt6868.jpg"],
        "birdthday": "1368/11/04",
        "national_code": "0011445732",
        "shenasname": "914510",
        "reg_city": "تهران",
        "father_name": "فرناد",
        "postal_code": "2017813749",
        "username": "mimani",
        "passworsd": "1234",
        "activated": true,
        "blocked": false,
        "phones": [
            {
                "title": "شخصی",
                "type": "mobile phone",
                "value": "09124184801"
            }
        ],
        "social_nets": [
            {
                "title": "telegram",
                "value": "@mahdi"
            }
        ],
        "emails": [
            {
                "title": "ایمیل شخصی",
                "value": "imani.mahdi@gmail.com"
            }
        ],
    },
    {
        "_id": user_id_2,
        "first_name": "محمد حسین",
        "last_name": "زارعی",
        "gender": "مرد",
        "portrait": ["../img/i8g665gtd15e2001s.jpg"],
        "birdthday": "1379/07/14",
        "national_code": "844100445732",
        "shenasname": "844100445732",
        "reg_city": "تهران",
        "father_name": "اصغر",
        "postal_code": "2017813749",
        "username": "mhzarei",
        "passworsd": "1234",
        "activated": true,
        "blocked": false,
        "phones": [
            {
                "title": "شخصی",
                "type": "mobile phone",
                "value": "091280410451"
            }
        ],
        "social_nets": [
            {
                "title": "telegram",
                "value": "@mhz"
            }
        ],
        "emails": [
            {
                "title": "ایمیل شخصی",
                "value": "mhz1379@gmail.com"
            }
        ],
    },
    {
        "_id": user_id_3,
        "first_name": "سینا",
        "last_name": "قصاع",
        "gender": "مرد",
        "portrait": ["../img/i8df5g4551fc0115gt.jpg"],
        "birdthday": "1368/03/18",
        "national_code": "004514415732",
        "shenasname": "004514415732",
        "reg_city": "تهران",
        "father_name": "میثم",
        "postal_code": "2017813749",
        "username": "sghasa",
        "passworsd": "1234",
        "activated": true,
        "blocked": false,
        "phones": [
            {
                "title": "شخصی",
                "type": "mobile phone",
                "value": "09124585302"
            }
        ],
        "social_nets": [
            {
                "title": "telegram",
                "value": "@g_ghasa"
            }
        ],
        "emails": [
            {
                "title": "ایمیل شخصی",
                "value": "g_ghasa@tumsc.ac.ir"
            }
        ],
    },
    {
        "_id": user_id_4,
        "first_name": "علی",
        "last_name": "تهرانی",
        "gender": "مرد",
        "portrait": ["../img/i80002555750f14.jpg"],
        "birdthday": "1359/05/19",
        "national_code": "8845415732",
        "shenasname": "315732",
        "reg_city": "تهران",
        "father_name": "عبداله",
        "postal_code": "2017813749",
        "username": "atehrani",
        "passworsd": "1234",
        "activated": true,
        "blocked": false,
        "phones": [
            {
                "title": "شخصی",
                "type": "mobile phone",
                "value": "09124585302"
            }
        ],
        "social_nets": [
            {
                "title": "telegram",
                "value": "@a_tehrani"
            }
        ],
        "emails": [
            {
                "title": "ایمیل شخصی",
                "value": "tehrani1395@gmail.com"
            }
        ],
    },
    {
        "_id": user_id_5,
        "first_name": "محمد",
        "last_name": "تهرانی",
        "gender": "مرد",
        "portrait": ["../img/i80002555750f14.jpg"],
        "birdthday": "1356/10/11",
        "national_code": "1105488105732",
        "shenasname": "215001",
        "reg_city": "تهران",
        "father_name": "عبداله",
        "postal_code": "2017813749",
        "username": "atehrani",
        "passworsd": "1234",
        "activated": true,
        "blocked": false,
        "phones": [
            {
                "title": "شخصی",
                "type": "mobile phone",
                "value": "09124585302"
            }
        ],
        "social_nets": [
            {
                "title": "telegram",
                "value": "@a_tehrani"
            }
        ],
        "emails": [
            {
                "title": "ایمیل شخصی",
                "value": "tehrani1395@gmail.com"
            }
        ]
    }
];


var corporation = [
    {
        "_id": corporation_id_1,
        "title": "شرکت فنی مهندسی مهاب قدس",
        "eco_code": "135120154151001",
        "user": [
            {
                "user_id": user_id_3,
                "role": "ceo"
            },
            {
                "user_id": user_id_3,
                "role": "cto"
            },
            {
                "user_id": user_id_2,
                "role": "staff"
            }
        ],
        "activated": true,
        "blocked": false,
        "phones": [
            {
                "title": "شخصی",
                "type": "mobile phone",
                "value": "09124184801"
            }
        ],
        "social_nets": [
            {
                "title": "telegram",
                "value": "@mahab_ghods"
            }
        ],
        "emails": [
            {
                "title": "ایمیل شخصی",
                "value": "info@mahab.co.ir"
            }
        ],
    }
]

var servie_center = [
    {
        "_id": service_center_id_1,
        "title": "مرکز فنی تهران",
        "eco_code": "135121154001114",
        "user": [
            {
                "user_id": user_id_4,
                "role": "مدیر عامل"
            },
            {
                "user_id": user_id_5,
                "role": "روابط عمومی"
            },
            {
                "user_id": user_id_5,
                "role": "staff"
            }
        ],
        "address": {
            "city": "",
            "address": "",
            "location": {
                "lath": "",
                "long": ""
            }
        },
        "activated": true,
        "blocked": false,
        "phones": [
            {
                "title": "شخصی",
                "type": "تلفن اداری",
                "value": "021-4465-8865"
            }
        ],
        "social_nets": [
            {
                "title": "telegram",
                "value": "@tehran_technic"
            }
        ],
        "emails": [
            {
                "title": "ایمیل شخصی",
                "value": "info@tehran-technic.co.ir"
            }
        ],
        "sla": [
            {
                "title": "خدمات فنی در محل",
                "commission": "10"
            }
        ]
    }
]


var account = [
    {
        "_id": account_id_1,

        "account_grade": "platinum",   // platinum, silver, gold
        "account_type": "single",      // corporation, single, group
        "corporation_id": "",
        "user": [
            {
                "user_id": user_id_1,
                "role": "owner"
            },
            {
                "user_id": user_id_1,
                "role": "admin"
            }
        ],

        "wallet_id": wallet_id_1,

        "vehicles": [
            {
                "number": 1,
                "vehicle_id": vehicle_id_1,
                "buy_method": "خرید آنلاین",
                "description": "",
                "my_car": true,
                "owner_id": ""
            }
        ],

        "reg_date": "1395/12/26",
        "expire-date": "2017/12/26",
        "duration": "365",

        "activated": true,
        "blocked": false,

        "services": [
            {
                "vitrin_id": vitrin_id_1,
                "access": true,
                "start": "1395/10/02",
                "end": "",
            },
            {
                "vitrin_id": vitrin_id_2,
                "access": true,
                "start": "1395/10/02",
                "end": "",
            },
            {
                "vitrin_id": vitrin_id_3,
                "access": true,
                "start": "1395/10/02",
                "end": "",
            },
            {
                "vitrin_id": vitrin_id_4,
                "access": true,
                "start": "1395/10/02",
                "end": "",
            },
            {
                "vitrin_id": vitrin_id_9,
                "access": true,
                "start": "1395/10/02",
                "end": "",
            }
        ]
    },
    {
        "_id": account_id_2,

        "account_grade": "platinum",    // platinum, silver, gold
        "account_type": "corporation",  // corporation, single, group
        "corporation_id": corporation_id_1,
        "user": [
            {
                "user_id": user_id_3,
                "role": "owner"
            },
            {
                "user_id": user_id_3,
                "role": "admin"
            },
            {
                "user_id": user_id_2,
                "role": "admin"
            }
        ],

        "wallet_id": wallet_id_2,

        "vehicles": [
            {
                "number": 1,
                "vehicle_id": vehicle_id_2,
                "buy_method": "خرید آنلاین",
                "description": "",
                "my_car": true,
                "owner_id": ""
            }
        ],


        "reg_date": "1395/12/26",
        "expire-date": "2017/12/26",
        "duration": "365",

        "activated": true,
        "blocked": false,

        "services": [
            {
                "vitrin_id": vitrin_id_1,
                "access": true,
                "start": "1395/10/02",
                "end": "",
            },
            {
                "vitrin_id": vitrin_id_2,
                "access": true,
                "start": "1395/10/02",
                "end": "",
            },
            {
                "vitrin_id": vitrin_id_3,
                "access": true,
                "start": "1395/10/02",
                "end": "",
            },
            {
                "vitrin_id": vitrin_id_4,
                "access": true,
                "start": "1395/10/02",
                "end": "",
            }
        ]
    }
];


var vitrin = [
    {
        "_id": vitrin_id_1,
        "type": "service",  // product, license, charge, service
        "abbreviation": "sos",
        "title": "شبکه امداد فنی",
        "parent": "",
        "description": "",
        "online_refrence": "http://www.sample.ir/docs/service/sos",
        "price": "0",
        "dimension": "ریال",
        "max_order": "1",
        "limit": "unlimited",
        "duration": "",
        "access_users": ["public", "users", "registered", "vip", "admin"],
        "attribute": []
    },
    {
        "_id": vitrin_id_2,
        "type": "service",  // product, license, charge, service
        "abbreviation": "lbs",
        "title": "سرویس های فنی بر پایه موقعیت مکانی",
        "parent": "",
        "description": "",
        "online_refrence": "http://www.sample.ir/docs/service/lbs",
        "price": "0",
        "dimension": "ریال",
        "max_order": "1",
        "limit": "unlimited",
        "duration": "",
        "access_users": ["public", "users", "registered", "vip", "admin"],
        "attribute": []
    },
    {
        "_id": vitrin_id_3,
        "type": "service",  // product, license, charge, service
        "abbreviation": "lbs",
        "title": "سرویس های فنی بر پایه موقعیت مکانی",
        "parent": "",
        "description": "",
        "online_refrence": "http://www.sample.ir/docs/service/lbs",
        "price": "600000",
        "dimension": "ریال",
        "max_order": "1",
        "limit": "limited",
        "duration": "365",
        "access_users": ["registered", "vip", "admin"],
        "attribute": []
    },
    {
        "_id": vitrin_id_4,
        "type": "service",  // product, license, charge, service
        "abbreviation": "onltrck",
        "title": "نظارت دائم بر خدمات",
        "parent": "",
        "description": "",
        "online_refrence": "http://www.sample.ir/docs/service/onltrck",
        "price": "0",
        "dimension": "ریال",
        "limit": "unlimited",
        "max_order": "30",
        "duration": "",
        "access_users": ["public", "users", "registered", "vip", "admin"],
        "attribute": []
    },
    {
        "_id": vitrin_id_5,
        "type": "service",  // product, license, charge, service
        "abbreviation": "etax",
        "title": "عوارض شهری",
        "parent": "",
        "description": "",
        "online_refrence": "http://www.sample.ir/docs/service/etax",
        "price": "0",
        "dimension": "ریال",
        "max_order": "10000",
        "limit": "unlimited",
        "duration": "",
        "access_users": ["public", "users", "registered", "vip", "admin"],
        "attribute": []

    },
    {
        "_id": vitrin_id_6,
        "type": "service",  // product, license, charge, service
        "abbreviation": "qr-marker",
        "title": "سرویس بارکد مصور فروش خودرو",
        "parent": "",
        "description": "",
        "online_refrence": "http://www.sample.ir/docs/service/qr-marker",
        "price": "100000",
        "dimension": "ریال",
        "max_order": "20",
        "limit": "unlimited",
        "duration": "",
        "access_users": ["public", "users", "registered", "vip", "admin"],
        "attribute": []

    },
    {
        "_id": vitrin_id_7,
        "type": "license",  // product, license, charge, service
        "abbreviation": "secondary-license",
        "title": "نسخه مضاعف کاربر شخصی",
        "parent": "",
        "description": "",
        "online_refrence": "http://www.sample.ir/docs/service/secondary-license",
        "price": "100000",
        "dimension": "ریال",
        "max_order": "30",
        "limit": "unlimited",
        "duration": "",
        "access_users": ["public", "users", "registered", "vip", "admin"],
        "attribute": []
    },
    {
        "_id": vitrin_id_8,
        "type": "product",  // product, license, charge, service
        "abbreviation": "",
        "title": "دستگاه دیاگ نسخه سبک",
        "parent": "",
        "description": "",
        "online_refrence": "http://www.sample.ir/docs/service/secondary-license",
        "price": "800000",
        "dimension": "ریال",
        "max_order": "30",
        "limit": "unlimited",
        "duration": "",
        "access_users": ["public", "users", "registered", "vip", "admin"],
        "attribute": [
            {
                "title": "wight",
                "value": "132",
                "dimension": "kg"
            }
        ]
    },
    {
        "_id": vitrin_id_9,
        "type": "service",  // product, license, charge, service
        "abbreviation": "remm",
        "title": "سیستم یادآوری هوشمند",
        "parent": "",
        "description": "",
        "online_refrence": "http://www.sample.ir/docs/service/secondary-license",
        "price": "0",
        "dimension": "ریال",
        "max_order": "1",
        "limit": "unlimited",
        "duration": "",
        "access_users": ["public", "users", "registered", "vip", "admin"],
        "attribute": []
    }

];


var invoice = [
    {
        "_id": invoice_id_1,
        "systemic_code": "",
        "type": "invoice",     //pre-invoice, invoice
        "description": "",
        "seller": {
            "title": "sample",
            "eco_code": "1540141101120",
            "address": "تهران، خیابان شهید مطهری، نبش هتل بزرگ تهران"
        },
        "buyer": user_id_1,
        "date": "2017/12/12",
        "time": "13:30",
        "price": "100000",
        "discount_id": "0",
        "dimension": "ریال",
        "payment-type": "online-saman",
        "status": true
    }, {
        "_id": invoice_id_2,
        "systemic_code": "",
        "type": "invoice",     //pre-invoice, invoice
        "description": "",
        "seller": {
            "title": "sample",
            "eco_code": "1540141101120",
            "address": "تهران، خیابان شهید مطهری، نبش هتل بزرگ تهران"
        },
        "buyer": user_id_1,
        "date": "2017/12/12",
        "time": "13:30",
        "price": "15000000",
        "discount_id": discount_id_1,
        "dimension": "ریال",
        "payment-type": "online-saman",
        "status": true
    }
]


var transaction = [
    {
        "invoice_id": invoice_id_1,
        "vitrin_id": "",
        "wallet_id": "",
        "title": "شارژ اکانت",
        "qty": "1",
        "discount": "0",
        "credit": "0",
        "debit": "0",
        "dimension": "ریال",
        "type": "بستانکاری",
        "category": "شارژ کیف پول",
        "status": true
    },
    {
        "invoice_id": invoice_id_1,
        "vitrin_id": vitrin_id_6,
        "wallet_id": "",
        "title": "سرویس بارکد مصور فروش خودرو",
        "qty": "1",
        "discount": "0",
        "credit": "0",
        "debit": "100000",
        "dimension": "ریال",
        "type": "بدهکاری",
        "date": "2017/12/12",
        "category": "service",
        "status": true
    },
    {
        "invoice_id": invoice_id_2,
        "vitrin_id": vitrin_id_6,
        "wallet_id": "",
        "title": "سرویس بارکد مصور فروش خودرو",
        "qty": "1",
        "discount": "0",
        "credit": "",
        "price": "100000",
        "dimension": "ریال",
        "type": "بدهکاری",
        "date": "2017/12/12",
        "category": "service",
        "status": true
    }
];


var discount = [
    {
        "_id": discount_id_1,
        "title": "تخفیف عید غدیر خم",
        "vitrin_id": "",
        "type": "discount",
        "price": "",
        "percent": "30",
        "max_order": "10",
        "start": "2017/01/10",
        "end": "2017/10/01",
        "code": "et211001"
    },
    {
        "_id": discount_id_2,
        "title": "تخفیف عید غدیر خم",
        "vitrin_id": "",
        "type": "gift",
        "price": "100000",
        "percent": "",
        "max_order": "10",
        "start": "2017/01/10",
        "end": "2017/10/01",
        "code": "et211001"
    }

]


var wallet = [
    {
        "_id": wallet_id_1,
        "account_id": account_id_1,
        "value": "125000",
        "dimension": "ریال",
        "gift_id": [],  // ==> 'discount_id'
        "start": "1395/01/12",
        "end": "2017/12/20"
    },
    {
        "_id": wallet_id_2,
        "account_id": account_id_2,
        "value": "125000",
        "dimension": "ریال",
        "gift_id": [],  // ==> 'discount_id'
        "start": "1395/01/12",
        "end": "2017/12/20"
    }
];


var vehicle_db = [
    {
        "_id": vehicle_db_1,
        "type": "موتور",
        "vehicle_name": "موتور سیکلت",
        "system": "آپاچی",
        "type": "cc160",
        "color": "خاکستری - نوک مداد",
        "capacity": "1",
        "cylender": "1",
        "axis": "2",
        "wheel": "2"
    },
    {
        "_id": vehicle_db_2,
        "type": "خودرو",
        "vehicle_name": "پراید",
        "system": "",
        "type": "x132",
        "color": "خاکستری - نوک مداد",
        "capacity": "4",
        "cylender": "5",
        "axis": "4",
        "wheel": "4"
    }
]


var vehicle = [
    {
        "_id": vehicle_id_1,
        "ecu_id": ecu_id_1,
        "vehicle_db_id": vehicle_db_1,
        "iden": "wre5t12",
        "national_code": "irA54005581004154",
        "engine_number": "5208980001",
        "body_number": "NE11d512",
        "model": "1389",
    },
    {
        "_id": vehicle_id_2,
        "ecu_id": ecu_id_2,
        "vehicle_db_id": vehicle_db_2,
        "iden": "gret33",
        "national_code": "irA54002115000141",
        "engine_number": "7288910001",
        "body_number": "NE05001545",
        "model": "1382",
    }
];


var sos_request = [
    {
        "_id": sos_request_id_1,
        "account_id": account_id_1,
        "vehicle_id": vehicle_id_1,
        "ecu_id": ecu_id_1,
        "payment_id": "",
        "servie_center_id": service_center_id_1,
        "category": "", // NC, commision
        "diag_report_id": diag_report_1,
        "params_report_id": params_report_1,
        "description": "",
        "activity_id": [activity_1, activity_2],
    }
];


var activity = [
    {
        "_id": activity_1,
        "creator_id": user_id_1,
        "title": "درخواست کمک",
        "systemic_code": "",
        "type": "sos",
        "description": "",
        "address": {
            "title": "",
            "city": "",
            "address": "",
            "location": {
                "lath": "",
                "long": ""
            }
        },
        "time": {
            "generation": {
                "status": true,
                "user_id": "",
                "date": "2017/12/15",
                "time": "13:10",
                "description": ""
            },
            "done": {
                "status": true,
                "user_id": "",
                "date": "2017/12/15",
                "time": "13:10",
                "description": ""
            },
            "cancellation": {
                "status": false,
                "user_id": "",
                "date": "2017/08/12",
                "time": "08:50",
                "description": ""
            }
        }
    },
    {
        "_id": activity_2,
        "creator_id": user_id_4,
        "title": "اعزام کارشناس فنی",
        "systemic_code": "",
        "type": "sos",
        "description": "",
        "address": {
            "title": "",
            "city": "",
            "address": "",
            "location": {
                "lath": "",
                "long": ""
            }
        },
        "time": {
            "generation": {
                "status": true,
                "user_id": "",
                "date": "2017/12/15",
                "time": "13:10",
                "description": ""
            },
            "done": {
                "status": true,
                "user_id": "",
                "date": "2017/12/15",
                "time": "13:10",
                "description": ""
            },
            "cancellation": {
                "status": false,
                "user_id": "",
                "date": "2017/08/12",
                "time": "08:50",
                "description": ""
            }
        }
    },
]


var diag_report = [
    {
        "_id": diag_report_1,
        "account_id": account_id_1,
        "vehicle_id": vehicle_id_1,
        "ecu_id": ecu_id_1,
        "status": "",
        "description": "",
        "failure_code": ["5400", "e102", "5310"],
        "date": "2017/10/12",
        "time": "12:30"
    }
]


var diag_details = [
    {
        "code": "5400",
        "title": "",
        "icon": "alert",
        "abbreviation": "ert33",
        "description": "",
        "tooltips": "",
        "need_sos": true
    },
    {
        "code": "e102",
        "title": "",
        "icon": "alert",
        "abbreviation": "tr1010",
        "description": "",
        "tooltips": "",
        "need_sos": true
    },
    {
        "code": "5310",
        "title": "",
        "icon": "alert",
        "abbreviation": "03474",
        "description": "",
        "tooltips": "",
        "need_sos": true
    }
]


var params_report = [
    {
        "_id": params_report_1,
        "account_id": account_id_1,
        "vehicle_id": vehicle_id_1,
        "ecu_id": ecu_id_1,
        "date": "2017/12/10",
        "time": "12:30",
        "type": "snapShot, average, multi",
        "parameters": {
            "ertw": "5200",
            "tte7": "280"
        }
    }
];     // 43 parameters


var params_details = [
    {
        "title": "دور موتور",
        "title_en": "engrine rate",
        "abrivation": "rpm",
        "systemic_name": "ertw",
        "max": "6000",
        "min": "4000",
        "optimum": "5000",
        "dimension": "meter/time",
        "level": "super dangerous"
    },
    {
        "title": "سرعت پاشش بنزین",
        "title_en": "fuel injection rate",
        "abrivation": "",
        "systemic_name": "tte7",
        "max": "300",
        "min": "250",
        "optimum": "272",
        "dimension": "liter/minute",
        "level": "normal"
    },
    {
        "title": "کیلومتر کارکرد",
        "title_en": "usage in kilometer",
        "abrivation": "",
        "systemic_name": "ugkm",
        "max": "300",
        "min": "250",
        "optimum": "272",
        "dimension": "liter/minute",
        "level": "normal"
    }
]


var ecu_detail = [
    {
        "_id": ecu_id_1,
        "title": "Bosch",
        "title_fa": "بوش",
        "image": "",
        "model": "2001",
        "serie": "x22",
        "producer_country": "آلمان",
        "company": "سامان سیکلت",
        "weight": "120gr",
        "docs": "http://www.sample.ir/technician/y4747588",
        "technical_sheet": "http://www.bosch.ir/support/car/ecu/x22",
    },
    {
        "_id": ecu_id_2,
        "title": "Bosch",
        "title_fa": "بوش",
        "image": "",
        "model": "2011",
        "serie": "lando",
        "producer_country": "آلمان",
        "company": "ایران خودرو",
        "weight": "120gr",
        "docs": "http://www.sample.ir/technician/y4747588",
        "technical_sheet": "http://www.bosch.ir/support/car/ecu/x22",
    }
];


var ecu_xml = [
    {
        "ecu_id": ecu_id_1,
        "xml": "http://www.sample.ir/xml/x22.xml",
        "version": "1.1.51",
        "release_date": "2017/05/12",
        "hash_code": "124erx42p915ve",
        "accesss": ["public", "sample", "registered", "vip"]
    },
    {
        "ecu_id": ecu_id_2,
        "xml": "http://www.sample.ir/xml/lando.xml",
        "version": "1.1.51",
        "release_date": "2017/05/12",
        "hash_code": "124erx42p915ve",
        "accesss": ["public", "sample", "registered", "vip"]
    },
];



var session = [
    {
        "user_id": "",
        "token": "",
        "reg_date": "",
        "reg_time": "",
        "expire_date": "",
        "expire_time": ""
    }
];



var user_setting = [
    {
        "user_id": user_id_1,
        "setting": [
            {
                "platform": "app",
                "device": "andriod",
                "mac": "",
                "theme_name": "classic",
                "bgColor": "teal",
                "disactive_sub_system": ["message", "ringtone"],
                "save_session": false
            },
            {
                "platform": "web_app",
                "device": "web_portal",
                "mac": "",
                "theme_name": "classic",
                "bgColor": "gray",
                "disactive_sub_system": [],
                "save_session": false
            },
        ],
        "expire_date": "2017/12/15",
        "expire_time": "14:30",
    }
];



var message = [
    {
        "parent_id": "",
        "type": "message",     // chat, message, to_do
        "still_open": true,         // check parent open or not
        "noreply": false,
        "sender": {
            "user_id":user_id_1,
            "priority": "خیلی فوری",
            "recive_open_req": true,
            "favorite": false,
        },
        "reciver": {
            "user_id":[user_id_2],
            "recive_open_accept": true,
            "favorite": false
        },
        "message": {
            "subject": "تست سیستم پیام",
            "body": "با سلام، اولین پیام این سیستم ارسال می شود",
            "date": "",
            "time": "",
            "attachment": [],
            "location": [],
            "user_operator_id": []
        }
    }
];


var trip = [
    {
        "type": "in_city",          // car_pooling, in_city
        "trip_recorder": "mobile",                 // mobile, diag_device
        "account_id": account_id_1,
        "vehicle_id": vehicle_id_1,
        "user_id": user_id_1,
        "popularity": 5,            // 5 of 10
        "frequent_trip": true,
        "origin": {
            "location":{
                "lath": "",
                "long": ""
            },
            "city": "",
            "address": "",
            "date": "2017/09/12",
            "time": "09:32"
        },
        "destination": {
            "location":{
                "lath": "",
                "long": ""
            },
            "city": "",
            "address": "",
            "date": "2017/09/12",
            "time": "12:32"
        },
        "duration": "04:00",
        "distance": "35.18",
        "distance_dimension": "km",
        "distance_recorder": "ecu",         // ecu, mobile, estimation
        "speed_average": "38.8",
        "speed_dimension": "km/hr",
        "speed_recorder": "ecu",            // ecu, mobile, estimation
    }
];


var remmberance = [
    {
        "title": "تعویض روغن خودرو",
        "priority": "high",
        "start_date": "2017/09/15",
        "start_time": "08:30",
        "iteration": {
            "repeatable": true,
            "value": 15,
            "dimension_value": "day",
        },
        "criteria": [
            {
                "source": "account",
                "item": "activated",
                "value": true
            },
            {
                "source": "account",
                "item": "blocked",
                "value": false
            },
            {
                "source": "account",
                "item": "account_type",
                "value": "single"
            },
            {
                "source": "account",
                "item": "services",
                "value": {"vitrin_id": vitrin_id_9, "access": true}
            },
            {
                "source": "vehicle",    // account > vehicle > vehicle_db
                "item": "type",
                "value": "خودرو"
            },
            {
                "source": "params_details",
                "item": "ugkm",
                "min": 4000,
                "min_dimension": "km",
                "max": 6000,
                "max_dimension": "km",
                "value": 5000
            }
        ],
        "operation": [
            {
                "title": "ارسال پوش نوتیفیکیشن",
                "abbreviation": "push_not",
                "destination": [
                    {
                        "device": "andriod",
                        "icon": "alert",
                        "message": "خودروی شما نیازمند تعویض روغن است."
                    },
                    {
                        "device": "ios",
                        "icon": "alert",
                        "message": "خودروی شما نیازمند تعویض روغن است."
                    }
                ],
                "start": {
                    "after": 5,
                    "after_dimension": "hr",
                    "max_try": 5
                },
                "end": {
                    "after": 30,
                    "after_dimension": "hr",
                    "max_try": 5
                },
                "cancellation": {
                    "after": 48,
                    "after_dimension": "hr"
                }
            },
            {
                "title": "اعمال تخفیف در کیف پول برای خرید",
                "abbreviation": "discount",
                "discount": {
                    "value": 15,
                    "dimension_value": "percent"
                },
                "destination": [
                    {
                        "device": "andriod",
                        "message": "تخفیف ویژه بمناسبت عید سعید فطر چهت تعویض روغن خودرو"
                    },
                    {
                        "device": "ios",
                        "message": "تخفیف ویژه بمناسبت عید سعید فطر چهت تعویض روغن خودرو"
                    }
                ],
                "start": {
                    "after": 5,
                    "after_dimension": "hr",
                    "max_try": 5
                },
                "end": {
                    "after": 30,
                    "after_dimension": "hr",
                    "max_try": 5
                },
                "cancellation": {
                    "after": 48,
                    "after_dimension": "hr"
                }
            }
        ]
    }
];


var qr = [
    {
        "account_id": account_id_1,
        "vehicle_id": vehicle_id_1,
        "params_report_id": params_report_1,
        "diag_report_id": diag_report_1,
        "qr_uuid": "45w024s",        // random generation  http://sample.com/qr/45w024s
        "sample_market_id": "",
        "sample_market": true,
        "printable": false,
        "start_date": "2017/03/12",
        "start_time": "13:20",
        "end_time": "2017/09/12",
        "start_time": "13:20",
        "max_visit": ""
    }
];



/*********************************************************
 *                                                       *
 *       02    AUTO DATABASE GENERATOR                   *
 *                                                       *
 *********************************************************/

/**
 *
 * 01
 * core function
 *
 */
MongoClient.connect(database_url, function (err, db) {
    if (err) throw err;


    console.log("\n" + chalk.yellow("=================================================="));
    console.log("\n" + chalk.yellow("=======|"), " START ", chalk.yellow("|================================"));
    console.log("\n" + "  :::: sample database installation ::::  " + "\n\n" );


    /**
     *
     * 01
     * CREATE 'user' collections
     *
     * @description create user
     *
     */
    db.collection("user").insertMany(user, function (err, res) {
        if (err) throw err;
        console.log(chalk.bgRed.white(" user "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount) );
        db.close();
    });



    /**
     *
     * 02
     * CREATE 'corporation' collections
     *
     * @description create corporation
     *
     */
    db.collection("corporation").insertMany(corporation, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" corporation "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });



    /**
     *
     * 03
     * CREATE 'servie_center' collections
     *
     * @description create servie_center
     *
     */
    db.collection("servie_center").insertMany(servie_center, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" servie_center "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });


    /**
     *
     * 04
     * CREATE 'account' collections
     *
     * @description create account
     *
     */
    db.collection("account").insertMany(account, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" account "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });


    /**
     *
     * 05
     * CREATE 'vitrin' collections
     *
     * @description create vitrin
     *
     */
    db.collection("vitrin").insertMany(vitrin, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" vitrin "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });


    /**
     *
     * 06
     * CREATE 'wallet' collections
     *
     * @description create wallet
     *
     */
    db.collection("wallet").insertMany(wallet, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" wallet "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });




    /**
     *
     * 07
     * CREATE 'invoice' collections
     *
     * @description create invoice
     *
     */

    db.collection("invoice").insertMany(invoice, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" invoice "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });



    /**
     *
     * 08
     * CREATE 'transaction' collections
     *
     * @description create transaction
     *
     */
    db.collection("transaction").insertMany(transaction, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" transaction "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });




    /**
     *
     * 09
     * CREATE 'discount' collections
     *
     * @description create discount
     *
     */
    db.collection("discount").insertMany(discount, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" discount "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });




    /**
     *
     * 10
     * CREATE 'vehicle_db' collections
     *
     * @description create vehicle_db
     *
     */
    db.collection("vehicle_db").insertMany(vehicle_db, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" vehicle_db "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });




    /**
     *
     * 11
     * CREATE 'vehicle' collections
     *
     * @description create vehicle
     *
     */
    db.collection("vehicle").insertMany(vehicle, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" vehicle "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });




    /**
     *
     * 12
     * CREATE 'sos_request' collections
     *
     * @description create sos_request
     *
     */
    db.collection("sos_request").insertMany(sos_request, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" sos_request "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });




    /**
     *
     * 13
     * CREATE 'activity' collections
     *
     * @description create activity
     *
     */
    db.collection("activity").insertMany(activity, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" activity "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });




    /**
     *
     * 14
     * CREATE 'diag_report' collections
     *
     * @description create diag_report
     *
     */
    db.collection("diag_report").insertMany(diag_report, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" diag_report "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });




    /**
     *
     * 15
     * CREATE 'diag_details' collections
     *
     * @description create diag_details
     *
     */
    db.collection("diag_details").insertMany(diag_details, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" diag_details "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });




    /**
     *
     * 16
     * CREATE 'params_report' collections
     *
     * @description create params_report
     *
     */
    db.collection("params_report").insertMany(params_report, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" params_report "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });





    /**
     *
     * 17
     * CREATE 'params_details' collections
     *
     * @description create params_details
     *
     */
    db.collection("params_details").insertMany(params_details, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" params_details "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });





    /**
     *
     * 18
     * CREATE 'ecu_detail' collections
     *
     * @description create ecu_detail
     *
     */
    db.collection("ecu_detail").insertMany(ecu_detail, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" ecu_detail "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });





    /**
     *
     * 19
     * CREATE 'ecu_xml' collections
     *
     * @description create ecu_xml
     *
     */
    db.collection("ecu_xml").insertMany(ecu_xml, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" ecu_xml "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });





    /**
     *
     * 20
     * CREATE 'session' collections
     *
     * @description create session
     *
     */
    db.collection("session").insertMany(session, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" session "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });




    /**
     *
     * 21
     * CREATE 'user_setting' collections
     *
     * @description create user_setting
     *
     */
    db.collection("user_setting").insertMany(user_setting, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" user_setting "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });




    /**
     *
     * 22
     * CREATE 'message' collections
     *
     * @description create message
     *
     */
    db.collection("message").insertMany(message, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" message "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });




    /**
     *
     * 23
     * CREATE 'trip' collections
     *
     * @description create trip
     *
     */
    db.collection("trip").insertMany(trip, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" trip "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });






    /**
     *
     * 24
     * CREATE 'remmberance' collections
     *
     * @description create remmberance
     *
     */
    db.collection("remmberance").insertMany(remmberance, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" remmberance "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });






    /**
     *
     * 25
     * CREATE 'qr' collections
     *
     * @description create qr
     *
     */
    db.collection("qr").insertMany(qr, function (err, res) {
        if (err) throw err;

        console.log(chalk.bgRed.white(" qr "), " collection created", chalk.green("successfully"), ".");
        console.log("documents inserted: " + chalk.red(res.insertedCount));
        db.close();
    });






    setTimeout(() => {
        console.log("\n" + chalk.yellow("=======|"), " FINISH INSTALLATION " , chalk.yellow("|=========================\n"));
    }, 3000);

});
