'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4405938eb032c65094e70878fa6b2e73",
"index.html": "182fa330fd1cfcafa8e31287ef801b31",
"/": "182fa330fd1cfcafa8e31287ef801b31",
"main.dart.js": "43e5975606cfa77c60c550df0e25f58d",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7d92279030443eb9778e2d0a403286d0",
"assets/AssetManifest.json": "faae1aeb87723219d9987fa7f093f22a",
"assets/NOTICES": "46c0d1a7cd12c85c1f0797037d52511e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/Omega%2520Alpha%2520Lung%2520Flush.png": "bb5fb08cb194311717895c22d96713ae",
"assets/assets/Jamieson%2520Fast%2520Dissolving%2520Meltaonin%2520(3%2520mg).png": "e96fa5812ddf990c0b225363f0030844",
"assets/assets/Kirkland%2520Calcium%2520Plus%2520with%2520Vitamin%2520D3.png": "aa7252ee0398a24ec6d8ad495b519fe4",
"assets/assets/Omega%2520Alpha%2520GlucosaPlex.png": "999289a5203f3e4b610b2e8b8da13f0a",
"assets/assets/Jamieson%2520Probiotic%252010%2520Billion%2520Active%2520Cells.png": "aae5a24a8c2c981e0fc7be61ff1a26d7",
"assets/assets/Jamieson%2520Gummies%2520Apple%2520Cider%2520Vinegar%2520(Chromium).png": "cf63c96dab69c8ecca5dbf4a9b434045",
"assets/assets/Kirkland%2520Glucosamine%2520Chondroitin%2520&%2520MSM.png": "74908916988161b3dfabcc30d8c8f552",
"assets/assets/Omega%2520Alpha%2520Veggie%2520Fruit%2520Plus.png": "a87590a940ea90672945c58ddb7d26eb",
"assets/assets/Wedderspoon%2520Manuka%2520Honey.png": "20ab14eb2a46e887ac9720e917e41855",
"assets/assets/Flora%2520Pro%2520Essence.png": "1ee3626af5b36657725a51b3e7a96d60",
"assets/assets/Sunyata%2520Golden%2520Proplic%2520Glycolic%2520Extract.png": "f518ef1b6e6b8bae0a87701c41970116",
"assets/assets/Webbers%2520Naturals%2520Omega-3%2520&%2520CoQ10.png": "af941884c489dc915f7f063105ccfb2a",
"assets/assets/Kirkland%2520Glucosamine%2520Sulfate.png": "2cb48f747da21231555d2868dbe4039e",
"assets/assets/Codeco%2520Prostacil%2520Maximum%2520Strength.png": "5191192dbbadf287dac875984b693f19",
"assets/assets/Tera%2520Nova%2520Omega%25203.png": "86c4f9f0957d76304f346b5d2120541b",
"assets/assets/Jamieson%2520Timed%2520Release%2520Vitamin%2520B%2520.png": "ffed129d13fe8bf0693093546128504f",
"assets/assets/Ontario%2520Pure%2520Ginseng%2520Lateral%2520Root%2520(Product%2520of%2520Canada).png": "431a73cf71169ef409bdd9c077f1cd85",
"assets/assets/Jamieson%2520Omega-3%2520Select.png": "917f32135b0e87087aaa8f77e43eee4e",
"assets/assets/Dr.%2520Bronner's%252018-in-1%2520Rose%2520Pure-%2520Castile%2520Soap.png": "349bc124078a1a75eb8189530a6cffce",
"assets/assets/Centrum%2520Womens%252050+.png": "97ef5c3a8598fadab89994f196520b1b",
"assets/assets/Jamieson%2520Grape%2520Seed%2520Antioxidant%2520Support.png": "a453aef2a0931eea3067a26c6104fd5a",
"assets/assets/BEC%2520Liquid%2520Calcium%2520with%2520Vitamin%2520B3.png": "d4887e2dc8ccd44797a1f9eac8e5f400",
"assets/assets/Osteo%2520Joint%2520Ease%2520for%2520Chronic%2520Pain.png": "1eafbb6e7c07b919071886b517890872",
"assets/assets/BEC%2520Lecithin.png": "a26cc1a8c712811f3422efed025cada1",
"assets/assets/Jamieson%2520Gummies%2520Orange%2520Lemon%2520Strawberry%2520D.png": "bae2f48bb783a60ffd8f187f938653ed",
"assets/assets/Kirkland%2520Omega-3%2520Fish%2520Oil.png": "3acbc936c390841e4a3b35159316e6eb",
"assets/assets/Centrum%2520Men%252050+.png": "685dc4c7124d5563136a05e9cd74829d",
"assets/assets/Flora%2520Udo's%2520Oil%2520Omega%25203+6+9%2520Blend.png": "fa49104a48d2d99146ecb8cca9bab66c",
"assets/assets/Enfomil%2520A+%2520Toddler.png": "f6f39f879102706dc133fac7405b1e04",
"assets/assets/Jamieson%2520Bilberry%2520Antioxidant%2520for%2520Eye%2520Health.png": "1038d7641f53495aaf079ae86e3ea0c8",
"assets/assets/Kirkland%2520Coenyzme%2520Q10%2520(100%2520mg).png": "21b99111995cb4ea9c7d6840996aa5bf",
"assets/assets/Bill%2520Seal%2520Oil%2520Omega%25203.png": "f684ab6cad0348e13117fb06d7c7318f",
"assets/assets/Organika%2520Hair%2520Plus.png": "dd29b4a1eae1844f584e223cd1987bae",
"assets/assets/Culturelle%2520Probiotic%2520Kids.png": "06d9acc09b529dbbd6bf8fb5ba6d322f",
"assets/assets/Organika%2520Bee%2520Propolis.png": "67ffd03af83edaab4901d02ac08b178f",
"assets/assets/Alba%2520Bontanica%2520Hawaiin%2520Oil%2520free%2520Moisterizer.png": "c02a79400d4eb03f9ab820023a165ced",
"assets/assets/Jamieson%2520Maximum%2520Concentrate%2520Cranberry%2520Complex.png": "9a9def5b17339267ca86fdff11d7640d",
"assets/assets/Codeco%2520Multi%2520Forte.png": "0e671e2ad291f6c43145c2fe859b9274",
"assets/assets/Enfomil%2520A+%2520Baby%2520Formula%2520(Eco-Value%2520Pack).png": "6777b832fec04f0e380a77b354159e63",
"assets/assets/Ontario%2520Pure%2520Ginseng%2520Main%2520Root%2520(Product%2520of%2520Canada).png": "475d9bdb32ca573a4fb4455cd87b5a65",
"assets/assets/Jamieson%2520Probiotic%2520Drops.png": "211729ee37dd188337a22f63b0fd50d1",
"assets/assets/Kids%2520Ddrops%2520Liquid%2520Vitamin%2520D3%2520.png": "5432ecd9e7140ff2fa0369bc7fa18512",
"assets/assets/Centrum%2520Prenatal%2520DHA.png": "57e8066d2649a60c9740ba51ff5ab525",
"assets/assets/MapleLife%2520Gout%2520Relief.png": "6d08e793650d3aa8d34a30336b2b8969",
"assets/assets/Jamieson%2520Chewable%2520Cold%2520Fighter.png": "ee71a2d3de900dcd2121b5e8aaaed324",
"assets/assets/Perucian%2520Gold%2520MACA.png": "9fb19baeec853d03564e3ea09b88eb15",
"assets/assets/Herbatint%2520Permanent%2520Hair%2520Colour.png": "94d7dffc8128929c14eb1a998f92e4cb",
"assets/assets/Jamieson%2520Multi%2520100%2525%2520Complete%2520Vitamin%2520(Men).png": "781e8e328f54d8341169b578d422ed0c",
"assets/assets/AgeOff%2520Probioic%2520Collagen+%2520.png": "3d0776df2482e4b9c6a559e14dd9af1e",
"assets/assets/Kirkland%2520Coenzyme%2520Q10%2520(200%2520mg).png": "e4369082dcf482b756810118ba701a85",
"assets/assets/Omega%2520Alpha%2520%2520Liver%2520Plus.png": "e56a099286bc55976cacea6efcb925db",
"assets/assets/Webber%2520Naturals%2520Triple%2520Strength%2520Omega-3.png": "7e8449f870974e8b9bdfff28aff45eb0",
"assets/assets/Vital%2520Life%2520Heap%2520Seal%2520Oil%2520Omega%25203.png": "7b4737f6a82dae8b390161709228ff04",
"assets/assets/Nestle%2520Materna%2520Multivitamins.png": "eea57f23c96717989e2948c9e33068bf",
"assets/assets/Alba%2520Bontanica%2520Hawaiian%2520Body%2520Oil.png": "4e86144d9bab840e822fb6b2824811cc",
"assets/assets/Holista%2520Remedites%2520Liquid%2520Softgel%2520Milk%2520Thistle%2520.png": "b0af6413763471f24183d7ceff4a0823",
"assets/assets/Jamieson%2520Calcium%2520Magnesium%2520+%2520D3.png": "41d1011be261891f9f9c7528291d42ce",
"assets/assets/AgeoOff%2520Collagen%25202.0.png": "37b387f5705f3a01ce26a6c649c6fdea",
"assets/assets/Codecol%2520Nanaco%2520Ultimate%2520Calcium%2520Supplement.png": "e016b8a9e847a6301b2cbdc6c9e0c6b5",
"assets/assets/Webber%2520Naturals%2520Ginkgo%2520Biloba.png": "2c83a120504c4737e2e4e15f7f5fa282",
"assets/assets/Jamieson%2520Salmon%2520&%2520Fish%2520Oil.png": "6d68874a12647fc729ef64092d02db7b",
"assets/assets/Jamieson%2520Gummies%2520Multi%2520Vitamins.png": "f2dc8bef5c3cf84e7e465391e348bdfe",
"assets/assets/Omega%2520Alpha%2520Protein%2520Multi%2520Plus%2520.png": "e075d5892d988b486869f9192c5e2718",
"assets/assets/Organika%2520Mushroom%2520Extract%2520Reishi.png": "7d41ea5af1177c9d6633fa66ca2579bd",
"assets/assets/Jamieson%2520Glucosamine%2520.png": "7d96c8417a759ad08fd7d5571c01205c",
"assets/assets/Organika%2520Organic%2520MACA%2520.png": "0c753d491e8ca7aa0ecef42d40782f38",
"assets/assets/Nature's%2520Acid%2520Lavendar%2520and%2520Honey%2520Soap%2520.png": "33806770337bbdef34c976a794145fd4",
"assets/assets/Omega%2520Alpha%2520Vitamin%2520D3%2520Concentrated%2520Kid's%2520drops.png": "bff3c1534e4243060bd90fbdbecb7f52",
"assets/assets/Codeco%2520Omni%2520Eye%2520Care.png": "c9cf1eae9c3acbf3699f6ae75e8ee631",
"assets/assets/Jamieson%2520Chewables%2520Juicy%2520Wild%2520Blueberry%2520Vitamin%2520C.png": "d35a38687c470eaa2ae2328be84419e9",
"assets/assets/Jamieson%2520Extrastength%2520Probiotic%2520Gummies.png": "e47be50cad7a154789323c868fd2cac6",
"assets/assets/Centrum%2520Women.png": "ce8aaa60e34f955f53759145b7a83906",
"assets/assets/Wild%2520Sea%2520Cucumber.png": "e8096ab2523d7c08103ff13f37bea382",
"assets/assets/Kids%25200-9%2520Night%2520Syrup.png": "1445f0f25d769f57d6d5e4d7e7aae038",
"assets/assets/BEC%2520Cadio%2520Energy%2520Co%2520Q10.png": "f2167e245f9c005665d426bf2f551e5b",
"assets/assets/Smart%2520Solutions%2520Active%2520Collagen.png": "a38b345eae9053c431ff2771824c5980",
"assets/assets/Golden%2520Silver%2520Flower%2520Tea.png": "0adf2085c470f76ffcd3782a5b81979c",
"assets/assets/Sisu%2520U-Cubes%2520Kids%2520Vitamin%2520Gummies.png": "d7bc0bb9aefec7f25fe94a70ac06b820",
"assets/assets/Jamieson%2520Cod%2520Liver%2520Oil%2520with%2520Vitamin%2520A%2520+%2520D3.png": "03feeeb3547eb27df00f9703e45883ab",
"assets/assets/Jamieson%2520Digestive%2520Enzymes.png": "872eef1ee0a209eb5f6ca4fe48fe1003",
"assets/assets/Chrysanthemum%2520%2520Tea.png": "f0982af154299a2bb1ece4d8d91ed3d6",
"assets/assets/Jamieson%2520Ultra%2520Stength%2520Vitamin%2520B%2520100.png": "2ddca404c5232d12d8ec5ef1e912388d",
"assets/assets/Jamieson%2520Vitamin%2520B1%2520&%2520B2.png": "b1f9066cddd8ea2db92816ef09e6c163",
"assets/assets/Maple%2520Life%2520MaxiFlex%2520Natural%2520Healing%2520&%2520High%2520Potency.png": "d8faad6f7d63fd493bc0036174b1e62a",
"assets/assets/Iron%2520Kids%2520Essential%2520Gummies%2520Calcium.png": "18f172a739197c1434a7683f4bfbbaaa",
"assets/assets/Omega%2520Alpha%2520Hyaluroic%2520Acid.png": "dbab986bec94497db8188845ce5aed77",
"assets/assets/Webber%2520Naturals%2520Super%2520Sleep%2520Melatonin.png": "52d54f991207f0718126bf2f7fb91fbe",
"assets/assets/Flora%2520Flor%2520Essence%2520Dry%2520Herbal%2520Cleanse.png": "241b4812d4a228d146b66801a57308bc",
"assets/assets/BEC%2520Spiruline.png": "ebd7b9870408568d66a97b4c5c24a23f",
"assets/assets/Omega%2520Alpha%2520Ultra%2520Probiotic%2520Plus.png": "65d71248d4f3871397fd29f524c749ad",
"assets/assets/Kirkland%2520Women%2520Multivitamin%2520and%2520Minerals.png": "2a4a6c82603b276a5408d2174afa0ac8",
"assets/assets/A%2520Vogel%2520Allery%2520Relief.png": "80ddd94a1e4273281f8f683eeb11b54c",
"assets/assets/Jamieson%2520Chewables%2520Berry%2520Complex%2520Vitamin%2520B%2520.png": "72ff9c79718cdf071d9892417fc015c7",
"assets/assets/Omega%2520Alpha%2520LessTerol.png": "2159f3494e02b33840051e474e5b9b59",
"assets/assets/Nova%2520Scotia%2520%2520Fisherman%2520Treme%2520Skin%2520Care%2520Sea%2520Kelp.png": "3c53554fc7d23bc53f2ccff28498552b",
"assets/assets/Jamieson%2520St.%2520John's%2520Wort.png": "2ab0a4f8adaf945d162b1f4e3502911a",
"assets/assets/Jamieson%2520Calcium%2520Magnesium.png": "9ae209eb8bdde3e5ba7d0dfd6bddae38",
"assets/assets/Jamieson%2520ProVitamina%2520Vitamin%2520E%2520oil.png": "a2c0ed0161ee902904c72785496880a7",
"assets/assets/Jamieson%2520%2520Chewables%2520Strawberry%2520Flavour%2520Vitamin%2520D3.png": "a436a79759e578b3cacf4a25c5ee526d",
"assets/assets/Organika%2520TNT%2520Plus.png": "835eeb014ed3f4c0baeb548cddc24b7e",
"assets/assets/IronKids%2520Essential%2520Gummies%2520Omega%25203.png": "66596906c5d968e1d83b8a8690b96e94",
"assets/assets/Codeco%2520Liver%2520Protect.png": "a6ed3be9f0ce1901564e75d818df6db2",
"assets/assets/Natural%2520Factors%2520Soy%2520Isoflavone%2520.png": "c204b4018f6ef64ac09985b458735911",
"assets/assets/Health%2520Balance%2520Lecithin%2520Natural%2520Source%2520Unbleached.png": "eeb5923b75865ccadb1eacb3cdbeb3b4",
"assets/assets/Natural%2520Factors%2520FlexAble%2520Glucosamine%2520Sulfate.png": "1771c50ef2674bd44aa61271235c424f",
"assets/assets/Jamieson%2520Softgels%2520Vitamin%2520D3.png": "351ff50c3f36b53fe4c750678a10ff07",
"assets/assets/A%2520Vogel%2520Sinus%2520.png": "e6306b5f7ce94c511b5d06460a8aad12",
"assets/assets/Ginseng%2520Powder.png": "1f34ce670ed437bfb129b4aae0287050",
"assets/assets/Flora%2520Gluten-Free%2520Adult's%2520Probiotic.png": "27239d4920903e5a0a844e3d5c3d2a53",
"assets/assets/Resvertrol%2520Rich%2520Resveratol%2520Concentrate.png": "4f468373db912f2fda7352b462dfcdbf",
"assets/assets/logo.png": "a3e9296d3b20a7a4feb522d37614299b",
"assets/assets/BEC%2520Men's%2520Essential%2520(Generation%25202).png": "7b6612f8946026a047b6d3d9d629900f",
"assets/assets/Omega%2520Alpha%2520Cal-Mag%2520Plus.png": "5b2d77044eef0450fb14dccd584920a7",
"assets/assets/Baby%2520Ddrops%2520Liquid%2520Vitamin%2520D3%2520.png": "929dcf3d883ebda0e954ef0410d8d54e",
"assets/assets/Jamieson%2520Odourless%2520Garlic%2520.png": "7fb7c1040da765ea3cbe8cf5e296e42c",
"assets/assets/Omega%2520Alpha%2520%2520Resprit.png": "9250ae53a21f9c4b4d608ccb4acfae82",
"assets/assets/Aronia%2520Blueberry.png": "320ef43dfdc79b024f17644144314d26",
"assets/assets/Omega%2520Alpha%2520D3%2520+%2520K2%2520Vitamin.png": "a43d4466983187a81fd361026b0ef0e2",
"assets/assets/BEC%2520Hydrolyzed%2520Collagen.png": "d78a1a42b15ef34e4cce56c20bce3c72",
"assets/assets/Jamieson%2520Organic%2520Echinacea%2520.png": "64f39ea1d5a016c73f58ea0edf13f8f1",
"assets/assets/Enfomil%2520A+%2520Baby%2520Formula.png": "d86765142c8f3f1540bd338a9910fc66",
"assets/assets/Flora%2520Iron+%2520with%2520B-Vitamin%2520Complex.png": "79682fc5ff92c04e814a2da74fc57c0c",
"assets/assets/MapleLife%2520Kids%2520Ca%2520+%2520Mag%2520+%2520Zn%2520(with%2520Vitamin%2520D3).png": "116a3d686a7163fdf4e59bb000daf994",
"assets/assets/Joint%2520Ease%2520Glucosamine%2520Chondroitin%2520Extra%2520Strength%2520.png": "e3e1381c054f4bc02b7aea6dcd8e204c",
"assets/assets/Melgrace%2520(especially%2520for%2520Women).png": "e65d281b60157f299c387087fee14227",
"assets/assets/Jamieson%2520Mega%2520Cal%2520Calcium+%2520D3.png": "3edb8b588423730b32874593fe547894",
"assets/assets/SISU%2520Lutein.png": "fd74d351161e0965f4445f61e9a0a770",
"assets/assets/Jamieson%2520Gummies%2520Tangy%2520Orange%2520(550%2520mg).png": "7e638bfb8d4997a8dc392986670f0111",
"assets/assets/Essiac%2520Herbal%2520Extract.png": "2f3695776add2efb23fa4c8d5ad2c8f0",
"assets/assets/Jamieson%2520Vitamin%2520A.png": "919dffe51b29feafea2f9a2456caf77a",
"assets/assets/Jamieson%2520Gummies%2520Multi%2520(for%2520Adults).png": "3989afc2bd691b8dfeb8996861db93dc",
"assets/assets/SISU%2520Co%2520Q10%2520(100%2520mg).png": "c802bc4715ecfc3d8d19f1be89fcda71",
"assets/assets/Kirkland%2520Fish%2520Oil%2520Blend.png": "639ea59b613aa258ddf03adf623942e6",
"assets/assets/Apiario%2520Propolic%2520Glycolic%2520Solution.png": "0db11ff8acafeb186cb7c4783c9cbf1b",
"assets/assets/Nova%2520Scotia%2520Fisherman%2520Treme%2520Skin%2520Care%2520Rescue%2520Balm.png": "4cc3ce97700b615d06fe0721cbc50724",
"assets/assets/Jamieson%2520Selenium.png": "5ab00c559916a6550290a1810e687559",
"assets/assets/Nordic%2520Natural%2520Children's%2520DNA%2520%2520(530%2520mg%2520Omega%25201).png": "6bf682fef00cb331fd14a05eb6e8fa9e",
"assets/assets/Jamieson%2520Milk%2520Thistle%2520.png": "e41377a1cd6ca6fecf0da3523183bfb2",
"assets/assets/Jamieson%2520Vitamin%2520E%2520(extra%2520strength).png": "e053ee257cc7c8a25dda6c16d777b125",
"assets/assets/BEC%2520OsteoCollagen.png": "22d9cca58e79da4aaa95ea1ecc3e2668",
"assets/assets/Omega%2520Alpha%2520Echinacia.png": "2273e73f01352a958cefb33579b741cf",
"assets/assets/Flora%2520Flor%2520Essence%2520Herbal%2520Cleanse.png": "e1e46d0793861a5e925cf0c5aacc154d",
"assets/assets/IMG_2540.JPG": "da252ab2a80e6c31ea21896a0c54edd7",
"assets/assets/Organika%2520Salmon%2520Collagen.png": "a520460728d3e27db076feebe8bb4430",
"assets/assets/Jamieson%2520Folic%2520Acid%2520(400%2520mg).png": "b1967604fa4b4282b1b0600c2611c13a",
"assets/assets/BILL%2520Natural%2520WildBlueBerry%2520Chewables.png": "5fc5ededfa9a982ffb29ecb38f2298e5",
"assets/assets/Jamieson%2520Saw%2520Palmetto.png": "901d70bd1ebfc3e532de7ffe71e2ac42",
"assets/assets/Jamieson%2520Eveninh%2520Primrose%2520Oil.png": "69046aae403bc845d37c5d728e5b2378",
"assets/assets/Omega%2520Alpha%2520Ginkgo%2520Biloba.png": "1fe4d502115fdb43a8591f1bb9720989",
"assets/assets/Pure%2520Maple%2520Syrup%2520Candies.png": "726e65207a2e472d1ab1fa739d65879a",
"assets/assets/IMG_2541.JPG": "1356086dcd6f2c185e01b42d9a70b60f",
"assets/assets/Organika%2520Milk%2520Thistle.png": "67c62b6c8e4b10ba27a830710297f357",
"assets/assets/Jamieson%2520Prenatal%2520.png": "de429844a45cd1e031183810f7bb4457",
"assets/assets/Organika%2520Reishi%2520Mushroom%2520Extract.png": "b2b69533dfedc9e4c8ca205e28f08918",
"assets/assets/Iceberg%2520Dried%2520Sea%2520Cucumber.png": "efc26e7a2fa1476f7cef45fdda4d652b",
"assets/assets/Bill%2520Natural%2520Sources%2520Placenta%2520and%2520Aloa%2520Vera%2520with%2520Vitamin%2520E.png": "bc881ed59f0dff21a102dedee45fcbdc",
"assets/assets/OceanLegend%2520Dried%2520Sea%2520Cucumber.png": "e2f4583f67c074094c7cc4ed751f66ef",
"assets/assets/Kirkland%2520Men%2520Multivitamin%2520and%2520Minerals.png": "0cd89766f9a2fb1e4722c4be9734a58a",
"assets/assets/Organika%2520Blood%2520Sugar%2520Control%2520Vegetarian%2520Capsules.png": "4479f8856f00f27023ebe7e50da6174a",
"assets/assets/Organika%2520Premium%2520Liga-Joint.png": "6c96adc24ea34341dff6109946d659c9",
"assets/assets/Alba%2520Bontanica%2520Hawaiin%2520Facial%2520Wash%2520Deep%2520Cleansing%2520Coconut%2520Milk.png": "9f92970d2d787758eba00719d9eaa7fe",
"assets/assets/Jamison%2520Chelated%2520Chromium%2520.png": "784129a5f334e4301b5370f61db235de",
"assets/assets/Iceberg%2520Dried%2520Fish%2520Maw.png": "e5e8a4ebc80c81622b61446665b8095b",
"assets/assets/MapleLife%2520Harp%2520Seal%2520Omega%25203.png": "d2ed7ad93bc38d64e279bdc980ce30a3",
"assets/assets/Jamieson%2520Gummies%2520Elderberry%2520Vitamin%2520C%2520+.png": "c35ad384fdc4dea2c557e7094e74727c",
"assets/assets/IMG_2543.JPG": "174decb4c4c02d3948434f50949c92f3",
"assets/assets/Jamieson%2520Lycopene%2520Tomato%2520Concentrate.png": "b6010185c1e3031f1492059013f9f1ac",
"assets/assets/Medela%2520Swing%2520Single%2520Breastpump.png": "95367a3b49872c730d6eabb9d478fcbe",
"assets/assets/VitaX%2520Revita%2520Capsules.png": "0d2f6b855d37ba7580631b37fa04006d",
"assets/assets/Pon%2520Lee%2520Propolis%2520Glycolic%2520Extract.png": "a8d587a70b145c2845a37127d6ea9f38",
"assets/assets/Jamieson%2520Resveratrol.png": "ad79c06028b7d13818699d3165450410",
"assets/assets/IMG_2542.JPG": "41d65cd3a7536e1f3b8770abab784ae8",
"assets/assets/Omega%2520Alpha%2520%2520Multi-Zyme%2520.png": "298772df1603524f6e2f73b10a87354f",
"assets/assets/Organika%2520Chanca%2520Piedra.png": "4699c5b9f3db18a36b3dbbe9c55930fd",
"assets/assets/MapleLife%2520Gluco%2520Balance%2520Proffesional%2520Herbal%2520Formula.png": "d8317bebaa327de796b17f11e97594ea",
"assets/assets/Omega%2520Alpha%2520%2520Kidney%2520Plus.png": "1cbe287f5e29e68141ddf6c1373fc9be",
"assets/assets/SISU%2520Milk%2520Thistle%2520Complex.png": "35881519ebc9bb0f46aef86233f4d83e",
"assets/assets/Ddrops%2520booster%2520Liquid%2520Vitamin%2520D3.png": "4cac8532a85023e2e8d551982784ee6f",
"assets/assets/Moroccan%2520Oil%2520Treatment.png": "bbb6536a25be640c8d80f32d5e680706",
"assets/assets/Efamol%2520Beautiful-Skin.png": "b82bcfce1db0528298a8732372b941be",
"assets/assets/Prostate%2520Health%2520Super%2520Prostate%2520Advanced%2520Multi-Ingredient%2520Formula.png": "3e823d9fd8d75e33b880a7a87f6f53ec",
"assets/assets/Jamieson%2520Lutein-z.png": "bfa3e138273fea1baf7a2b9546a7a949",
"assets/assets/BEC%2520Harp%2520Seal%2520Omega%25203.png": "ee4714dd74225d4f712c505d76855f17",
"assets/assets/Jamieson%2520Multi%2520Vitamin%2520and%2520Mineral%2520Supplment%2520(for%2520Kids).png": "15ec14af86e8d4c75d7805f1e00773ed",
"assets/assets/Jamieson%2520Melatonin%2520.png": "17b0fd743ba9c70ec714258f8c9fb2a9",
"assets/assets/Bill%2520Facial%2520Oil%2520with%2520Placental%2520Protein%2520.png": "5d40b07961f336c1d5d0acb3bdcbbfe0",
"assets/assets/Jamieson%2520Co%2520Q10%2520(Extra%2520Strength).png": "58666410d4759c22a28852c7a3fc4f36",
"assets/assets/Aveeno%2520Baby%2520Calming%2520Comfort%2520Lotion.png": "88642675067e83c019ce50559fd43384",
"assets/assets/BEC%2520Glucosamine%2520+%2520MSM.png": "a586982224906bb302628d1cbea344a5",
"assets/assets/Omega%2520Alpha%2520Herba%2520Cough.png": "82c54769c40e11dd0f7b6ba55f77acc1",
"assets/assets/BILL%2520Children's%2520Colostrum%2520Chewables.png": "d1180b1d82daae59df012e80aee47f02",
"assets/assets/Jamieson%2520Timed%2520Release%2520Vitamin%2520C.png": "dc2c788139a020fcd15f0606ce4fd1b5",
"assets/assets/Jamieson%2520Multi%2520100%2525%2520Complete%2520(Women).png": "a21340b65d40e7ffd737fa9700f3852f",
"assets/assets/Natural%2520Factors%2520Vitex%2520Regulates.png": "aebe389e03931b4d4a5087eb0634e9cf",
"assets/assets/Jamieson%2520Vitamin%2520B12.png": "0995118a1fe9faf7013709cdb816008d",
"assets/assets/Jamieson%2520Glucosamine%2520Chondroiton%2520MSM%2520(Ultra%2520Strength).png": "8d13c84870bfda72c108e385ae9d73c0",
"assets/assets/Jamieson%2520Chewables%2520Juicy%2520White%2520Peach%2520Vitamin%2520C.png": "432a4a34c5b5b6aeffdf5901973cf0cd",
"assets/assets/Aveeno%2520Baby%2520Daily%2520Lotion.png": "577417c0e52cfa01eea8161d1750e815",
"assets/assets/Alpha%2520Omega%2520Glucolizer.png": "c7ba34186ac2ec55c22ecdd90c0baa26",
"assets/assets/Flora%2520Milk%2520Thistle%2520Plus.png": "1c54e1fcbc2d260fb1eb7c9ad7b9e611",
"assets/assets/BEC%2520Bee%2520Proplis.png": "c4599b77738c54bda9c5850d1ecaba46",
"assets/assets/Omega%2520Alpha%2520%2520Anti%2520FlamX.png": "9e5d0f73e78609568688ab2dd91d8cb5",
"assets/assets/Jamieson%2520Effervescent%2520Natural%2520Orange%2520Vitamin%2520C%2520(1000%2520mg).png": "1aeb0979aa976ef03bc8d660a1aee795",
"assets/assets/BEC%2520Grape%2520Seed%2520Extract%2520OPC.png": "3f5896fc58541bf7e981ebcbf6d969e4",
"assets/assets/Jamieson%2520Curcumin%2520Tumeric%2520(550%2520mg).png": "aed81713355c1c0040dd1e8f7eed1973",
"assets/assets/BEC%2520Fish%2520Oil%2520Omega%25203.png": "3537acba95778b4c10d1f915faf9cbb1",
"assets/assets/Organika%2520Goutrin.png": "a8706a331fb27d0e93a6c7ff0944400d",
"assets/assets/Webber%2520Naturals%2520Vitamin%2520e.png": "9599eb31a5b2293c741a32a571d319e6",
"assets/assets/Jamieson%2520Multi%2520100%2525%2520Complete%2520Vitamin%2520(Women%252050+).png": "c7001b7c8ba51b2edfa660cf50d3e844",
"assets/assets/DHA%2520Vegetarian%2520Algae%2520(Docosahexaenoic%2520acid).png": "3e041c000a5ff7b0e140b8363f768e16",
"assets/assets/IMG_2544.JPG": "ca76804b6bed65b76ac1597f7a471946",
"assets/assets/Jamieson%2520Lecithin.png": "d16e8320c4b1b7d372b3b18e370cd04e",
"assets/assets/Aveeno%2520Baby%2520Smoothing%2520Hydration%2520Moisture%2520Cream.png": "298afd9a1be591ec45b708abe58900d9",
"assets/assets/Centrum%2520Men.png": "f6d5dee87f7df43ba490abf738957fe6",
"assets/assets/Jamieson%2520Vitamin%2520B%252050%2520Complex.png": "ec900032cef768c33413fce36cb23d46",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
