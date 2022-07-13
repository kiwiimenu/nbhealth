'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4405938eb032c65094e70878fa6b2e73",
"index.html": "aea79ec0e5738a4c5cb284d2998677e9",
"/": "aea79ec0e5738a4c5cb284d2998677e9",
"main.dart.js": "1800fe40a0b31b4748c5507b25c9ff33",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7d92279030443eb9778e2d0a403286d0",
".git/config": "5c5ddd832508a4b48801719aed7dc458",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/55322a7dac338d0823405a9c304e47ca287fa8": "6dbd3b9073433ba0d45e0d0a64ad22de",
".git/objects/95/e394d301c5066f8a171f018b5976e86cc880c7": "94a2cfd9c6c88dbf6c2525a894da9009",
".git/objects/92/bcf0d4455b3bca8925bfc8964ae5af082b6e8c": "0e6eed8d538418449ccac4fd3ca71f91",
".git/objects/66/efcd7819565518ee7fedf9c50254c40ac0ea4c": "5b27fced32022ae75479b2e3df0410a3",
".git/objects/66/750f6d7663826f76809ac0360da11706c5e543": "f99e21147b23b49490ecf398475585b1",
".git/objects/50/72136158a639d213559a8af3a82f025e0f1e10": "15d5e892fbed69b4c1f4d13cf3fb7d5c",
".git/objects/50/996b579e6a1f19951e09cbecd3d3c13e572afa": "1aca4cac61f4108876e50ff910b2715b",
".git/objects/68/051d1f476056bedfa99610d35a1963c3cca392": "43f21def82231fcda095a3cb77eefcaa",
".git/objects/68/1a43ca16c674b2194bf7e23a0fa366dc7f208a": "3ba73899ffa64960c21485d891ddcb1e",
".git/objects/3b/3ddda909c662d7e7cf9c5c21eb90d2c709a0e1": "cba25ab5a82d5fd97e4b1469334cfebd",
".git/objects/03/e0af382774887f6be1bd1bb13d9cc0f4f7829d": "75f58b67fd30780d004b725857c7338b",
".git/objects/9b/b95c9562c7e0eb1aa4634546737128ddf17d09": "d78ed7c2d1d9d0d61336a5ec3037dc29",
".git/objects/9e/eb7a9074a1b9fcd9ca8e2dd129fd4c5d37b41e": "f55c3ee78a70c638ae8cf896d8da99b0",
".git/objects/6a/8f2472e5f0a6e69fccba4592afb2c1feb8fe9d": "14856ef3ec1634d1384143bf43c427c6",
".git/objects/35/c8bd12187f84540462e8c7eac7d364a56b4273": "9051c8c24831025a06a466956a4e192e",
".git/objects/35/ae0748ffc5d756a04c3026373b5dfcc3097c4f": "5442bce5f1792b7822988d7c77b40944",
".git/objects/3c/a2707465b78ead259773cbbe6518c8a60235a8": "6cf77890ab448bd2fc394af5cbc9d3ce",
".git/objects/3c/412705839a3c3b5af608c837bac0fab8a24303": "dff5725eaa6b7eb69274252937fde2c7",
".git/objects/56/0e9679bcfc538e9044d7ec47ccdc3bb042f033": "54db886a30dce276555d27326b7782bf",
".git/objects/56/6f34dd81f343caa9a5586e1df77121eb1eacaa": "f5286ccf691d4dbf3f323ad860ebed38",
".git/objects/51/cb686380787799ed74786733b6a516791f1945": "2604b64663f845c839a3b60ba492e4ee",
".git/objects/51/22e53bba9d9c347399251a896d0376f57c52b1": "686d4851ac00d76a379ab3e255decd78",
".git/objects/3d/e8a23a14022383d9b44803f37293bcfbff29f7": "89a5f5e9a7f9c6b1f046ffd32a119f9b",
".git/objects/3d/6c7d8a351fe9f1390ed3fb33280d6eaeb4c7ef": "2012bf8f64f77d7eb903088f28c5a1cc",
".git/objects/58/a400eaf428be7d33670b816d4e61d514c3a71e": "d0afe7f377e9d92a5c3378d0743bc12e",
".git/objects/67/8192f32024cfc252f257feda1de87833480ca4": "e32479e16b3de238d62285c6950f9abb",
".git/objects/67/6c14676ef7f2da16d93d7541f0c10d083fea1d": "ad40ddf7c18bbcad506ed6f8e063ba68",
".git/objects/94/4c2ec263949e8356374d82d4a7b895c627e780": "90d9c96d7f02fd56641d03b6d34239a0",
".git/objects/0e/b23fb220c28a312ae2fdff1f0a7710f1535bb6": "5d3f6acad8166f5e053c99df31a84f9c",
".git/objects/0e/de3720ac2f3af7d611b43bca51161ff7988c8f": "84663877330eb2618f563b8956c2d3ca",
".git/objects/0e/d4bc7bad8ec789bef4dbeb786a7508f01cd7eb": "55b4a304a2740f048dda66b90bf16d10",
".git/objects/60/d0bd0341492fca9b4d83ec3fe8df734e44d631": "18c3398f2653fcfa907419ad6cf1c0ae",
".git/objects/5a/53db4c5f62dfecfdb8fabf8d840e8d09c5301b": "e1e84a841f8c1b64ea1bf3ff798fbbfa",
".git/objects/5f/233e9cfbab36ba4a25a0d40c68fa12b26c114b": "8850418b8e30fd0cedd16b416753261a",
".git/objects/33/120b5adf795511bb142de06910772c4cc79c21": "55d464f9aeeb857640fd4ef6773125cf",
".git/objects/33/cf058ff8dba253ae8409a7d1018d1a8c1a9e75": "26a1efa5516d4f391b1af6007e83a3b9",
".git/objects/33/cb56bf8f6e73323180815a7c2bd9af1e3e62d9": "0dc8d111a449d48bfcab85c707937643",
".git/objects/33/4e4629caf5bf65f9ebf7732dd30bc9f11a036d": "235e57f68e443374f3ad3bdd961b9ee2",
".git/objects/9c/c6925d0b4c6952b67b3cc7e2441b255c761f9c": "0f43a19dd6f02c2f8f4fffe5be2ac1bd",
".git/objects/9c/393c9bf0104358c457bc8a42d9fea2a226d5d4": "24c784dc14a60b1a8d7fc69100e6d86e",
".git/objects/02/46e727b748c6e555bdf4049985d33934b19445": "6897846d3fc83f66b19309a0a2fe8ee3",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/a4/1678ef3542a25115c7f5d8e16961d56e8f11e9": "030230f2b012e42304d37b20fff0c0eb",
".git/objects/a3/615e5e4adec68e11900c3d61603ef6b2965f00": "6c925008d1ebc3bd786557cfa00fc2cb",
".git/objects/a3/6bc5a4c8f33d107c237fcb8f22932b93e2d6fc": "b4db04134e47263df1c7c0636be69253",
".git/objects/d0/2a27974061ab85dfef20a6925d1b87df8026d8": "80b29e4da7a79831b9515f4097bb2264",
".git/objects/d0/0ea0b5270c5b586f8ebc56229bbc987a968370": "1b46f9caf11bd48336436e70f1286515",
".git/objects/d0/0371c32513e6bfab169dcb0be398811376648c": "acb1b667c175fd45b298c5356477aed5",
".git/objects/d0/833e825a8cfb80eaee2e8defb332fec39ec42c": "d385219c6d372854a5e8a1c047746fa0",
".git/objects/da/9fd2b198f60f15fd8a6e21a7eba1eacc304efb": "74c5a505ba323af004fb84278e26aea1",
".git/objects/b4/e078d1a2b600b4ccc21b312a1ff42b1cc4838f": "7ff4d56a1a2f936edd0a35d1b3502dbe",
".git/objects/b4/ae9e6989560e885049f2c9a0c292d5d7eb0e40": "6ac080801d254e9b76b76e199086fd64",
".git/objects/a2/d697ef1f19b51eff22d2aa6f4f079fb18085ab": "8467994921450271b711356ac3458723",
".git/objects/d1/796535ff3b6b45c1db88621ff266de1447a55c": "6f76ffbedfb60ac1b1a9e0615cde3f60",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/169a7897e369eafb19c8665684f9a66c3779fc": "5f4e5060db4b3740c049b15586dbdc01",
".git/objects/d6/6bce7062b4fb858892bcceb337510b61a1cc43": "9e79ce08ae37558c2bb1d7d4e61e6aaf",
".git/objects/d6/8f54fd53ed32e5b085b808c16ec73f1c8420df": "c0b3cff94608e841939fb511d68dfa57",
".git/objects/bc/dc22fcf7b467ce7d452e2b8aa18fce4d8b8b97": "22e3283a6df6c2ac2d8ce23a6863fcb5",
".git/objects/ae/fa40270847a033169547fcd5f550a1d22ca62a": "e1f68d1e1313d8e4094c922bf08fe109",
".git/objects/d8/a40ce053159589ee7363ceab6061b4fc72ec3d": "5f66a30fb4985e190588004a18f0e2bd",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/aa19fd02a3de1d6ba4fcecbd1305b5209882a6": "3019c9f29922b5eb71ee3cc48c83f01a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/165ed99345c1107eba075c3799320fbf82f0d3": "81d8d80abab14291d3695b9976d8d318",
".git/objects/c0/d5d1c08b3391817146a8670d1096076269fbbb": "e345970408491637396633c7d6608d55",
".git/objects/c0/0246c69353bed4ef98f871330fc8444665531c": "51ef50cc30fbf62360c86b65b16ee71c",
".git/objects/c9/646207aa2d348fba3f2ad56b5956d8d0255d85": "cfcef7fd04dcb45e305669db68eb2b3d",
".git/objects/fc/9ff6bbfc5f0be128315b09874116cc8e562bbe": "28db66f6cfe4bd3f7db8851751bd6ca0",
".git/objects/fc/887f4412ec86f21f510b08b795b893939fd0e9": "f0b2e40494630fc1b14ae9d46381e213",
".git/objects/fd/e47a6a39a8ce7451bcd6338144118c56e3cc4f": "6ee95cf02f69ad67542816d3358110a4",
".git/objects/fd/8e843eb92b3cc8bba388d5599b4c6347d6e8bd": "c11864868fc86b52d5276dda8a17418e",
".git/objects/f5/d0e51b0cfca1ad9be7df3b55e34f7454fa9907": "0143bc4783e4bf53bd66b3374146e203",
".git/objects/cf/0929a39f78e7a4a90a70aad48f20ee8cb1fa3c": "96d5d2065c4bb1ffe3f935275302cf66",
".git/objects/cf/532fb0eff9af16de880cc4d06c05ee772ddd48": "ef051a91950a04e5eeb1c19f07badc63",
".git/objects/ca/7e1450f42da6fb75d71a2f69639cc9dcffcd67": "92971661bbd162a3537aeea65dd07fe5",
".git/objects/e4/4849e0d5c964229a4debe0407bd6ee61a4aa1f": "83515e96b1bece879da58877dc0ff120",
".git/objects/e4/a98203db7917a935aec5b0dc561a28c72b142e": "ec7c4e989285e96abe94993afb20c5da",
".git/objects/fe/e7e2b98974c245a8b08b5075dd2a04e40f341e": "ad327f09298ad3fde892539a0287eb47",
".git/objects/fb/32cba78736a62dc0179a16091921b2f8df2b2f": "091e935a69cb9fefe58f818faecc3ce3",
".git/objects/ed/7e0e3cfbe819739b7471d48007c2ee0de70b40": "05b1853ae471f21dc64ae5620824816c",
".git/objects/ed/6591fbdd85087d04983d485d2d5dbbe8d8ad68": "9b1882558e530070d1e1e296a9e95022",
".git/objects/c6/6618f14b582e4d9958007d89129ff59aaf5696": "2e54eedf6cd4bf17fdffbb1d26de3ecf",
".git/objects/c6/a2c51f3f931a92293510bfa217200b6325caa2": "728c45c9cafa66531a15fc50e0c25935",
".git/objects/ec/5f666371083d9a395256a7c4bb2435c313fafb": "497376d8ca571d053e49e8987240a3b5",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4b/f88fdf2fa12d56a39cceae507cf6a3127d29ae": "a22ebe646e62500f6547700855a6ff58",
".git/objects/11/f6b831ebea15ac462bcedeec27532be10d37d9": "b4a79c7e65ee5ea1e4f62e2d8f7dc6ac",
".git/objects/29/91846de417de052d6ca25857fca78d0b7fd8f1": "2f5726752a1095827a6d57376b7a6233",
".git/objects/7c/8f3e6a24667795171e002845b0265e79026a33": "edc4678e536ef794d4fad32fbba1cd5a",
".git/objects/16/3d3ae52e3437a296a6145e8b1ab3c07be0b0fd": "656f208fd402800790cda8239a7b1bf6",
".git/objects/89/f95a3323d0eec9b4f596ffe1a2fa6043be5235": "bfb7bc75c33b5f32d175b1de5c5a2b47",
".git/objects/45/e54fa2f7e98ee24d445d8441ca512c685935a1": "9befe781ad95da51b6a674f63b6d3c47",
".git/objects/87/0fa8f74a9fb88cf327f19b75420a8d7b76663a": "665c58d1c4438b49d639352e6c016503",
".git/objects/87/372202d319ba17c362ef64c3350517c7b7322e": "d03817537936fdd5b27dccf52db8db69",
".git/objects/87/d1c8eb258ef2d057bba5f1ff875c6cd86e9418": "fd617d3ea9e554f3e0eca3d9f398eb91",
".git/objects/80/b9bafa62fa930af0ccdbd3a5ba501eb73b05c1": "92b60eb523ff011a4a8d4fc68680d6cf",
".git/objects/74/4f353f8ddafb53301ee44c6c862415ec3610e1": "0f22aedfcadd963a52d9577b54d1a054",
".git/objects/1a/72a0d0a531ce775555e8992099b768a5d74f3f": "10e01d6569b2153f199987d434211170",
".git/objects/17/7b0c32a3c83a9059bc945b4a64c447b4e3412b": "6f5b352e378248f6678c3eca1166879d",
".git/objects/17/6382975b97f9207d7e35de614a5961db63b96a": "8ed1285bcac1469028cba933d3faaec2",
".git/objects/7b/105a69b90d78114ac308fe05912c39b7187a2f": "7d342e60e04427ecbaa66feeef43930f",
".git/objects/8f/315e3271adbe7c8845522bd823b705d0eddae8": "e1611a9faffb54edadd233c811321a7a",
".git/objects/8f/6ec6832df0ce41a0e655523f94fc67cb9d4ee4": "2ae13e6d1fdc82213af95e5255386232",
".git/objects/8a/c42ca45e537cfc69de32571a3e23182bf4a7e8": "5ee3f82710de9403876fe2933781823f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/36264163491477d0b1735458e0c7724256a183": "fa3b55c67306913a580555f5df8f4a8c",
".git/objects/4c/31bad8a8573bd8a6ca236a70002a410d9bbf90": "360b15cc1479a3180b3016b944682119",
".git/objects/26/12e31e50ce015893aaee1131365ff805c8ff33": "3714b594bf2c1d42de3fa9d38e27f020",
".git/objects/21/930f66c64358981c7898bb6c8d38e76ae37580": "e83e04ba6e0079c5580f208b5b67bcfe",
".git/objects/81/d7ecb86acdbc392a1ef4a68e39121a89491d0f": "18998de51da6391198b9562dcb1ab8ca",
".git/objects/81/a09ffbd1955bff3799690a08c286f4e83d3e9b": "a0003e20ff0dd22647a2c438e3fb5096",
".git/objects/72/43829ef639867a4fde471843b8e5865c264a7e": "e5620dc22b508952d37acd8bc4d6df92",
".git/objects/44/260bdd4477b0a898666295a9578ba32b131197": "8401a10038979429acfb146a8a61bc5e",
".git/objects/44/b07ef2bb446532297585c52a1cdec6adbe2894": "4b73c5e95d7801d95236569241e03756",
".git/objects/2a/000fa36e65221a1b738a60ea957258e3d906a7": "c4300785f02e020b508c91a1da275c0d",
".git/objects/2a/6193d7296262ac17d4fc4fdb9340e3efdd4c93": "adcd609e9c4d0327114e07c6126e9957",
".git/objects/2f/3b3bd158691a5416a26a09a4301b1e4ce326bf": "83dee98f2456dd9fb9e613ac118c9802",
".git/objects/2f/e1ce8b5483da314fa44ceb63eb388ba584f030": "ca9e9134b72c015426e742a0fec491f5",
".git/objects/2f/e0046c931a99fecb7fd894060a7dc067bea56b": "dc668a61d04edb18793d8ca8b78e04c0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e3314cd2ef942a91679cdc569b7d3395a57d27": "0aff5405d30cce3795bcfc1ce07f0577",
".git/objects/88/1ea9cad48959476c702d2bd2a7acca5892da85": "753d4dde2e9fe333f55d4b7247fecead",
".git/objects/9f/4172d5c7c493ae601a319af281fb1844231968": "5de4b3b888301d29cfea67cd8fa40c70",
".git/objects/6b/1d41b458eacf5f222e3dfc91a712789aac5118": "4c68761bb086681f5b6726f6a76b95c3",
".git/objects/07/d378e2ff4b383214a3ef088a880e6ac7360114": "92a86e49f66ec2a3e9aacd33b75f146c",
".git/objects/07/547425f4e9ca71b652ac673aad4a63d08dc9c0": "8610090b9834527ac3491c3bb040e6fd",
".git/objects/38/17f530e9790a4675aecc199e0a59f88b4c20ff": "7514deb089735bf447bef810b99ac926",
".git/objects/00/f8dcf280d08b043e12bd84dc61c14936d1cdf9": "0f87ac09e3766588f367210b1e590687",
".git/objects/00/6efbdae7a36b451151506646d2bc4802c0894a": "c1a58ff6a1646b13fb14ff9d797016aa",
".git/objects/5c/5adc0d047bde17ca421b25fe0d5c6f7e941cfe": "70abe406435bfae1aa40b2812d7f8ad8",
".git/objects/5c/6739afedb6187a821ab404580c3607bb5b6523": "fa27c0f0961ca421b6278fc9509f613f",
".git/objects/09/bc9b008c2a8022f10e900af611e5f1dcc32384": "8de1530c55d6cc0e9758d7f5d8d2d922",
".git/objects/65/5ecc9a5a94c0a8fae37cecd62e2d020bf7190e": "15940cba690d2bf4c90c31c45e7ec398",
".git/objects/65/488285823f2d8cb7dd604af6f30623418a7727": "a95629eb23371ecbbb703386902880f6",
".git/objects/62/a12b9225c9b198d55118873c9ac9879c185866": "63a5f22ba1e292c941142d0fcd17d453",
".git/objects/96/b4be1974b454c1391ccdd455c0da9e9082857e": "447809795aa4677cdd55c9cca5b035a1",
".git/objects/3a/9fb1bdc2e812378865b92755074f5a06cd5d29": "9f548f87d06d1a3b1f1348ef6c4b3c51",
".git/objects/54/e104fc4ad398b89504ca04a8252a0981211131": "613454ece24a457c7e897c792db13645",
".git/objects/98/65b171cf1e7723c98870e783bbf5c2da3e2dae": "f627dae613519c6ea30dc8f16ae33d3b",
".git/objects/98/d317739b39bc8f8a837c316752d2f7a7a42386": "4eb8e203637e027e95b30440d5391aab",
".git/objects/53/348a8b33f9910ec52fb5143b64db397ff602d9": "c19af0e004b83ccb42deccd165f3c902",
".git/objects/37/2a3941dc9ce19f9606985eb0c9208c505bda33": "17e18f3e6a55a6a6f99a67cf514dbdf7",
".git/objects/6d/59879c53977a2a3ab50232e4461d777b7c6778": "cc0615a040fa8f55fd0cd0539ff2d1cc",
".git/objects/6d/9a52b205731b93c396f336ed7e20414ae066a0": "010fb60e4180f13c08e5310b34eeeaf3",
".git/objects/01/96abadc6da068c64734dfc7facf52d7d408b5c": "a15502d4e4fe84818210bf89f395edb3",
".git/objects/52/c39d5df5871e2a4ede910c2e7d46264a2e26c5": "7ad625d9e451e15490af5740711602e0",
".git/objects/55/c0d4b7606a8e6a7c3264dda5f923b205f6e229": "f72fbd2bc436f2a53502a40e9d9f48d3",
".git/objects/97/c3a1e3b18fe1f64664e0be31c633097736b2d5": "1ae75f6b4afbf8e89d0a3787bb729557",
".git/objects/63/4f656ba521a083e343fd860b971c07a70c818e": "2dfe9260c7534d5ab45391e6e3e2a291",
".git/objects/63/1b2d04a019cda06f64a64754fd318615892562": "b7e3b1a252fc191c14a3825ab91be872",
".git/objects/0f/460a8554c5df5f3f033b1b91571ff720d2f0ec": "aeab0764a141c42acfcde42f41451ce9",
".git/objects/0a/579a0df7373269b023ad58e411c1bd4a267199": "d8196957be34ecf13ff043db25597c78",
".git/objects/0a/21cb96d943db81124f50dc54ec308f45db4a0b": "cb756ca9f260ee33df88cf59b9653449",
".git/objects/90/3921b18a9f394c207193cfc4f34682839fe92a": "6a1d535f998bbbf2b3d97ca62f4721ca",
".git/objects/90/0d36c1eeb2400a68dc326bafec7ca488d11adb": "31ae69c4fbb3088256dae601252e897a",
".git/objects/bf/00ed72077f7547fa0ef3d4cfef80f855136a4d": "e0383248997835bb4ac3af487f87ada2",
".git/objects/bf/8c0bd8a3aea80021ad00d67db6c3c893ed6058": "58f294e152af6de473dac64e265e8d9a",
".git/objects/bf/88ecb3771e2b0cf72339f2fc82d34a061562d2": "921fe52788e0833f3cf613b1880ce7f8",
".git/objects/d3/9b41cb55459f2584a83868c7456d0ae02d6117": "bbe5c851b4689e96f04dee7a831fa751",
".git/objects/d3/6668a6fa645c9390f1f3733471bbf02df77b91": "f33872e995db0daed2cb9092e5f195fb",
".git/objects/d4/647975c2aef8240a2280013dc2c679716f7451": "26c41fd77a60843e4b5aa2a5136e8d7d",
".git/objects/d4/73d5fefd44ea2abd831e687bf363138e563543": "ed08840b9f5477486231c8782c40c4b5",
".git/objects/d4/9a8b707b97f64c6d9cf60e4b0945db676a02e4": "b6436b427b8505f4d84b87d090081048",
".git/objects/a7/960a3c22eec548eb1a7c0fcb84306f5cdd6a4d": "405053b0f707c352e1f3f8f929dcef8b",
".git/objects/dc/d72ebdae1aada8227ec40f822815dc38cdb72e": "d93496052b66efac8337669f60568212",
".git/objects/b6/61afd964cd5e292c3ab7de4e5b9e362003ac00": "43dcbcfed9144f67c2a4be37fdb93b68",
".git/objects/b6/b9750b1633754630333978d14a8e5333f260d1": "8fe534679cdcea09a321c27d60f5f3b0",
".git/objects/a9/8ab9c212080e1540bea11cebba6844e0e82971": "36360fe593cfa9c632bb9c00b475aa28",
".git/objects/d5/2beff5685536d96520cb0c7136ff91901c5da1": "fc7f818f51ebec8829502fa1a6c53d08",
".git/objects/d5/d47c25f272eb9f93a9ae4dc732e1c2c57566f9": "fc634b9dcce0854d09c84d09d7b58fbc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7003680ecb3b084b45c5cda10eb51edb1bd64b": "41aa5e0d47b2b04d75da3314c243d9dd",
".git/objects/db/37408aeab9ca099281bbb092f961672be5934e": "238766675e365f0f0485768921ccd389",
".git/objects/db/ceafdc03ac9f2b13a912a85c834f0e4dc93148": "6b6d263b6aeae368e5dd737696c8250e",
".git/objects/db/fc6f355f34fa6f790c9e2ff6699ae0e6ca262c": "e219348056c833fd40c5bd67ff6e14cd",
".git/objects/a8/35b29244084fbffdab5d7b39d7948449982409": "6ec351d732044f58c03fa1c64c324873",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/2ee519b78a95f4eb3efcbfc8eee86d9dc33571": "d3508c02396170d2d369eac4610beabc",
".git/objects/de/2adb1c174045aa5a7a600f3c9996c343c0f1f7": "d625c384c35923945a8f00bd7d7f5d3d",
".git/objects/de/0ae7269891877dfebdf9037e40da12728c0d99": "b27b35948297979c3afeb53cc12e8b01",
".git/objects/b0/225f328827a68182c7bf6c9deb6678454ff9d7": "672b98f6434f984cc3bef6fb299f1149",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0406e4fc1f461c61dc6ee0a1294c8242d61922": "046dd91daec6e424f13824dc26133a34",
".git/objects/b9/6a86110fa47189fd1207efef40c7687e040cce": "e27d5478c3975f04675698a2be343d84",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/11b0a7f8f02ce1dcc75424d7645595d818f632": "55e4f036272a2c138bef9fe96a8ffef7",
".git/objects/c3/69a99a2b28cbe2fd1336ea1301f8f2e25a0283": "6d8c2b37076609818fb6cf5ff20424cf",
".git/objects/c4/296b6306b8b2876acebe163655b0c8f416c5ab": "943206aad9ccd7b01cbecc1bd7dea8e5",
".git/objects/ea/49ae5c9577ff64176ff6965a78f949c01bcd48": "5bc6bcf26100304b2aaa201d9c1dec05",
".git/objects/e1/cdaf7705c6b4d14baae3d62970790dbfb6b957": "3fcc618cd3cfc7da6d3224d85d734b7c",
".git/objects/e1/3d03f9641f64e4ccd152f7712eb65f29ce4972": "844153166802051395bd235c6598e25b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e6/b05be7cfc17d5295dde3ad9cb99e7c6d3d8607": "23a5a12eea64198c82b130b291926135",
".git/objects/f7/2d12a7eed6737ee1ecb6e25f3648734e27f80d": "c1f93f1c920b55f8ac65d6ab3e7ba24f",
".git/objects/f7/b8303eea177f49a355a6653cea0d722e637a34": "b7fc758846e4f45b5d2e5a168f297ba5",
".git/objects/fa/862608ff83d60de9098bafcde96a9f031b0d93": "9192da55282d56ccfd65e9af28e04190",
".git/objects/fa/508bc4808ef571d77fb1b266fabc0a40282e79": "0e8c57e24feccd097be54332eff167e5",
".git/objects/ff/6f63bb09f9881b6c3dbd16507bf16b2124e9bb": "b2152a08371fa9bc7b054e1564a12d26",
".git/objects/c2/a12153cf467e8e3b0c729b496f29e200db6512": "ca39a4a422f7d730de2ba4a612ff93e5",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/4e971932a3e5419e21c86c5f46ea7e45df6fa8": "1f37eb7eaff97d3302cdeaba6dd70f77",
".git/objects/f1/d6a3c6f5c1a0f18d7f714af07031ef1c49e976": "52342278fc39730d26b3436f09064397",
".git/objects/cb/26d290142b1aa16ac42c4f5653647ad63f750a": "6409e4f0e63edb99e5303e7b0885bde4",
".git/objects/f8/608619c0a186f0002436a9eedaa418500f0786": "bb2d901a7411a945af83a310a6885a4c",
".git/objects/f8/58e8c57a7ff44a2c8b93a0ceffe7bb039ed1eb": "dcb536d6d10dd6da0a36ee636e6124ec",
".git/objects/ce/9caafcd56bdcbb5f8e5e746f7d2123b2fad64f": "935fc4abf4eaec5145d0c6add9c856ee",
".git/objects/e0/14d3cb1095d5a8c70ba6a299930f514f769065": "59c246cdefcb03ef62b1497c51c3f10b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a48ff5fa7d8b54b32b2377dc7fb3433a7ffa6a": "eccb7d4b56e31f8dcd52c7afca341123",
".git/objects/2c/b9e1cabc9f618cbef12b6e9e4b4345e656c38d": "28661a1789681f201799bc78c6a9f2b8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/baed9cc068b8818a2b89500f337286f443d85b": "9a5ae3112c85b00282a4f7d011d6ef03",
".git/objects/41/a25b38200949bc3ece30ca8a8dd68203181c2e": "d443dcfe6bb9d87d0b588f2a8d4ff4af",
".git/objects/83/eb610ed062493d04f1fd22cda5442f4de49c9e": "48b518bba0be8992a580fc5969dd8c1c",
".git/objects/83/e670efd1de155e05a72c48ad73cca05ce7db88": "5dfec5b049dc4401dbf9ff8460bac30d",
".git/objects/77/4cd1cc9542931dfd9f0027078a15179dc8b061": "a2f6168c78e0b5fa0822470adb96a2f1",
".git/objects/77/3b262e74e1651a3848a1b3f28771854ef0f026": "b4dfb734b902dee80b9a8e43a06a7fd4",
".git/objects/4a/334a2a3ec709dc808cbe733992932cd225413b": "a99472cf0ad7d9cd829d3449b5e71014",
".git/objects/24/c50914e0d1608b218f515c49f478ba1cefe450": "a673ee2cee5e111a74f6967067bd1ac7",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/4d654d5e957f084d131d476e50b5e9272a9643": "b81776299f9dfec9782dc93207c201e8",
".git/objects/23/9c474b22730fe3e2d40cec9f1a2365710fdb45": "add47dd87677453cc2ab0295b473287b",
".git/objects/4f/ee1bbcf117fd032fa366a7e02245875fff7c99": "5bfce2bc2c4783346814d190fdbb9a51",
".git/objects/8d/44470fbe1788405057950053d3c3f8cdbc8bfa": "5aa6475ecdd4c85e723db552881b555c",
".git/objects/15/25263c1ee42bb90375181a47ecb82038563378": "4cd172ba82313e1c834712b6ed16775f",
".git/objects/12/9c8c599eb2cf8a46f718ad8f4b2ffa1576fa8e": "39a9b4b6bff0633e734448bcf469aa4d",
".git/objects/1d/a41a877f7c6a8d20ee24be71ee48a2ce11a5de": "34f789b95e23ab2e016774d71bd501fc",
".git/objects/71/36cafa3f7ff50f21672fa0f7547a0858fe969a": "0a72133b0493a0dca9805579e9ee3d4c",
".git/objects/71/93fbb26f11947d9b430da7e1969c53f605d19f": "0beeb6b47855daf69cfc9af82978e33c",
".git/objects/76/fd523eb1908bfda41e0eb198f87851ce0726b4": "6d4ec499eddc91a940f3985dbe827987",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/ca95496726491fdb2165f1cefe625e990bb77a": "735f63110c76b962194d84120e6498f7",
".git/objects/82/19f70e6c7180f3d58fce99cd5f2c823402b1a2": "a997dbf53852add94e84117cec06a2b8",
".git/objects/49/1dac45d502ac98e71b206a6b6554407abbfc15": "9997295ca69906e233ddb5823dd9864c",
".git/objects/49/aec98915a5b4e2528c88f07c1343e341212451": "c35f016997bafe8d5405a3109d93139b",
".git/objects/40/933dbef22b552228a796d6534afe3b0261c15f": "86b7aae926ad1ac94ecd02901ae54372",
".git/objects/2e/988555f7ec9ce57ff13ad93185c7ee39e1fd5d": "72112c493ff174cfc260a76d2d29d0d8",
".git/objects/2b/333f352238862c08ab1ade5e7df9d6b6c1dfd4": "f46aac7ac116a6297fbdf5a1cb194e87",
".git/objects/78/d582c2ed1b5500ab970d822c7b05fddfbf0587": "d3aed74822ebb8c51a10ceae2b3b2196",
".git/objects/8b/06b91ec4e9921659624c1665cc42d4a38c9613": "99eaf0a7fc60c0526c701c9ad0e19520",
".git/objects/7a/fda19446487ebcfb72d0d9716806126f1166ca": "24be38896476c07de10839279a5db5f3",
".git/objects/7a/24392187ce016349653eda32287a9c499cb580": "3f6c5cff36fc1247714cb58870a3ce79",
".git/objects/8e/3244d606f522857b0174e7ab14af7861dbc827": "c8c88f84876977d9d4a5654590465315",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8950ee01374d09a7960090e6c80b48b3",
".git/logs/refs/heads/master": "8950ee01374d09a7960090e6c80b48b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "203bd7a890f751d901b97d2391f4185a",
".git/index": "b26adf89443b2f578f6032e8b5023edb",
".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
"assets/AssetManifest.json": "6ce6dc4f80a714e08e1a73ad3d56b11b",
"assets/NOTICES": "46c0d1a7cd12c85c1f0797037d52511e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/Organika%2520Goutrin.jpeg": "d5a4f08206fdc44cbbb5c13d6dfcd796",
"assets/assets/Codeco%2520Prostacil%2520Maximum%2520Strength.jpeg": "ab3986b808c4425bcfeb14f6400e9ffb",
"assets/assets/Centrum%2520Womens%252050+.jpeg": "c834473b1cef540cc930593c4aa7006d",
"assets/assets/MapleLife%2520Gluco%2520Balance%2520Proffesional%2520Herbal%2520Formula.jpeg": "ad04f095a005fe1ad715368a04c7dbe8",
"assets/assets/Moroccan%2520Oil%2520Treatment.jpeg": "a2227228528d6036a254569c04339ea4",
"assets/assets/Omega%2520Alpha%2520D3%2520+%2520K2%2520Vitamin.jpeg": "20d6ed2663ed6de4d4b338c2f9435452",
"assets/assets/Enfomil%2520A+%2520Toddler.jpeg": "20a34d4dc572d552a6d88be945348fec",
"assets/assets/Omega%2520Alpha%2520Cal-Mag%2520Plus.jpeg": "6017d8804d4ea80ccfde1789a8db2d86",
"assets/assets/Kirkland%2520Calcium%2520Plus%2520with%2520Vitamin%2520D3.jpeg": "a46e0a8d8edfadd5d3512fb84ae358ad",
"assets/assets/MapleLife%2520Kids%2520Ca%2520+%2520Mag%2520+%2520Zn%2520(with%2520Vitamin%2520D3).jpeg": "d8e8a05dff23b13d1e4e7d29769c18b6",
"assets/assets/Herbatint%2520Permanent%2520Hair%2520Colour.jpeg": "2ab178dae13bd4ce43bda4b5f2408a6b",
"assets/assets/Jamieson%2520Calcium%2520Magnesium%2520+%2520D3.jpeg": "8b74ba44916e55260820e093878b6c65",
"assets/assets/Organika%2520TNT%2520Plus.jpeg": "bba0629d66564183c06bcafcdb4ad16d",
"assets/assets/Organika%2520Salmon%2520Collagen.jpeg": "87983d11e0f27c11a53ee455be76d3f5",
"assets/assets/Kirkland%2520Men%2520Multivitamin%2520and%2520Minerals.jpeg": "c4b8494fca09f1f3f80b94f9cb651e9a",
"assets/assets/Jamieson%2520Vitamin%2520B%252050%2520Complex.jpeg": "c7d9d11fd85567f0a7352983e4c2831f",
"assets/assets/BEC%2520Harp%2520Seal%2520Omega%25203.jpeg": "89a1a86920c47c876637893495d87080",
"assets/assets/Webber%2520Naturals%2520Super%2520Sleep%2520Melatonin.jpeg": "e635dd87a7447474365b7413c56db20b",
"assets/assets/Jamieson%2520Multi%2520100%2525%2520Complete%2520(Women).jpeg": "66a8251edc2b4c9c52d3409d99194a16",
"assets/assets/Jamieson%2520Vitamin%2520B1%2520&%2520B2.jpeg": "8c001cdc7aa1d6b6488d5b31db376222",
"assets/assets/Jamieson%2520Salmon%2520&%2520Fish%2520Oil.jpeg": "7b21c7bb7d696780f4ecb11178a0c674",
"assets/assets/Kirkland%2520Coenyzme%2520Q10%2520(100%2520mg).jpeg": "cdc2996a81bff99a181d976d486c899f",
"assets/assets/Alba%2520Bontanica%2520Hawaiin%2520Oil%2520free%2520Moisterizer.jpeg": "161ff26c4f63c1101155f7b0d09efe78",
"assets/assets/Sunyata%2520Golden%2520Proplic%2520Glycolic%2520Extract.jpeg": "52bef888cef795f649fc230e156015da",
"assets/assets/Flora%2520Flor%2520Essence%2520Dry%2520Herbal%2520Cleanse.jpeg": "063c57a3c4aab56f7d5fe77587f446a4",
"assets/assets/Jamieson%2520%2520Chewables%2520Strawberry%2520Flavour%2520Vitamin%2520D3.jpeg": "82add9430e4dfd970a662929d5f8d376",
"assets/assets/Flora%2520Iron+%2520with%2520B-Vitamin%2520Complex.jpeg": "3592797f4d64e4d8f91525e8db8ae696",
"assets/assets/Jamieson%2520Lycopene%2520Tomato%2520Concentrate.jpeg": "743c9cabc7a6924f87db8add3536924d",
"assets/assets/Jamieson%2520Digestive%2520Enzymes.jpeg": "c0e0e8867bdcb75a13868aec235c4e8f",
"assets/assets/Omega%2520Alpha%2520Hyaluroic%2520Acid.jpeg": "7b3aa4cbf13cf700334b077762c17fee",
"assets/assets/Jamieson%2520St.%2520John's%2520Wort.jpeg": "e34af6e2cbbc7704a93068e36ef19b33",
"assets/assets/Chrysanthemum%2520%2520Tea.jpeg": "0b8fc49a2a8cd13b03e98e431fe33b09",
"assets/assets/Omega%2520Alpha%2520%2520Multi-Zyme%2520.jpeg": "1a9f546db880be554f60916e2430ced6",
"assets/assets/Nova%2520Scotia%2520%2520Fisherman%2520Treme%2520Skin%2520Care%2520Sea%2520Kelp.jpeg": "03212f1942d6c0baf69d9b58417a3edf",
"assets/assets/Flora%2520Flor%2520Essence%2520Herbal%2520Cleanse.jpeg": "daf05284a24b0a1a58fbba6ac5234bac",
"assets/assets/Flora%2520Pro%2520Essence.jpeg": "0ae131c65b2a88eba6e02f9c84ac9abd",
"assets/assets/BEC%2520Hydrolyzed%2520Collagen.jpeg": "a6fa1bea15fda8fb168d4d00e068c64b",
"assets/assets/Kirkland%2520Women%2520Multivitamin%2520and%2520Minerals.jpeg": "d3731d469ce9d2dbf2432562d6d53d3f",
"assets/assets/Omega%2520Alpha%2520%2520Resprit.jpeg": "248bf8fafd8b13177e6a39a9f131aeb4",
"assets/assets/Jamieson%2520Lecithin.jpeg": "c3b381dfbdd3937142a69b794d0b029e",
"assets/assets/Jamieson%2520Chewables%2520Berry%2520Complex%2520Vitamin%2520B%2520.jpeg": "2029dd5441be292a9166bc2996187cea",
"assets/assets/A%2520Vogel%2520Sinus%2520.jpeg": "5dc42ba24f9a359a5df48a0c676f3b17",
"assets/assets/AgeOff%2520Probioic%2520Collagen+%2520.jpeg": "4476c7d4e647b6c23a3cf6630c89c09f",
"assets/assets/Organika%2520Organic%2520MACA%2520.jpeg": "7f5bab846a429936fcb94242b07922a7",
"assets/assets/BEC%2520OsteoCollagen.jpeg": "a9a547a5186174f4f5be95c73e500cdf",
"assets/assets/Jamieson%2520Gummies%2520Orange%2520Lemon%2520Strawberry%2520D.jpeg": "3f64fde7f9e67e438da4096fc6d3ab44",
"assets/assets/Omega%2520Alpha%2520Lung%2520Flush.jpeg": "fafeb89d3dcf8fa33e79d2830a8ea892",
"assets/assets/Jamieson%2520Gummies%2520Multi%2520(for%2520Adults).jpeg": "3b896b8d834c6660d6caeda28ef9fbc1",
"assets/assets/Jamieson%2520Timed%2520Release%2520Vitamin%2520C.jpeg": "ceb3df92c884cae2e60f665acfcb397c",
"assets/assets/Jamieson%2520Multi%2520Vitamin%2520and%2520Mineral%2520Supplment%2520(for%2520Kids).jpeg": "cdfaf43af80a5ee66d66e97e203ab67a",
"assets/assets/Aveeno%2520Baby%2520Daily%2520Lotion.jpeg": "cb41922b767a66fde1819c1391ad1fe8",
"assets/assets/Jamieson%2520Organic%2520Echinacea%2520.jpeg": "df68e275b712b6ec24d867cedf5eaabe",
"assets/assets/Natural%2520Factors%2520FlexAble%2520Glucosamine%2520Sulfate.jpeg": "c5721bae3119f0f1e115f2c0578e0b19",
"assets/assets/Jamieson%2520Glucosamine%2520.jpeg": "62e4b66281ae84c32a4538ba80651c38",
"assets/assets/Iceberg%2520Dried%2520Fish%2520Maw.jpeg": "e4681e16e4ab9d507683d3762712b03f",
"assets/assets/Resvertrol%2520Rich%2520Resveratol%2520Concentrate.jpeg": "bf4221d7056981c5f19c7b688aabd1b8",
"assets/assets/Centrum%2520Prenatal%2520DHA.jpeg": "09fa9ff0c9b27ba7246a4edc3b97e5e9",
"assets/assets/Jamieson%2520ProVitamina%2520Vitamin%2520E%2520oil.jpeg": "fdbd12d257f2dc6b9dc976eabde02f37",
"assets/assets/Flora%2520Gluten-Free%2520Adult's%2520Probiotic.jpeg": "3acf5941b84ecf04f943a3dc5b8251c0",
"assets/assets/BEC%2520Cadio%2520Energy%2520Co%2520Q10.jpeg": "2d532f1187fce487aac622c344dc0fca",
"assets/assets/Baby%2520Ddrops%2520Liquid%2520Vitamin%2520D3%2520.jpeg": "ad4e6034d6a21c33f9065a3574f4e62d",
"assets/assets/Jamieson%2520Chewables%2520Juicy%2520White%2520Peach%2520Vitamin%2520C.jpeg": "af95103cdf1181cd3e72f5ac45bdf760",
"assets/assets/Iceberg%2520Dried%2520Sea%2520Cucumber.jpeg": "71199a68615cbc0b2134dc6d3b6bddf5",
"assets/assets/BEC%2520Glucosamine%2520+%2520MSM.jpeg": "179611e268a420ac1166a1eed7186580",
"assets/assets/Alba%2520Bontanica%2520Hawaiian%2520Body%2520Oil.jpeg": "52e4a961f9be3f2a327f3b2914822820",
"assets/assets/Nova%2520Scotia%2520Fisherman%2520Treme%2520Skin%2520Care%2520Rescue%2520Balm.jpeg": "d69ac2cb6cd86f6ed912f76e33548ad0",
"assets/assets/Efamol%2520Beautiful-Skin.jpeg": "4fab7ba9bbef43493dd984286b73d664",
"assets/assets/Ontario%2520Pure%2520Ginseng%2520Lateral%2520Root%2520(Product%2520of%2520Canada).jpeg": "2d68b860b15c83b2e8b4985c0a861d57",
"assets/assets/Jamieson%2520Gummies%2520Tangy%2520Orange%2520(550%2520mg).jpeg": "a09df1aee13e5fb69021c7021d305740",
"assets/assets/Omega%2520Alpha%2520Herba%2520Cough.jpeg": "d688dadfb390b7b8cd23805ec594e0d5",
"assets/assets/Organika%2520Bee%2520Propolis.jpeg": "b4e4b668b2907b1a2cd624ad755d6a25",
"assets/assets/Melgrace%2520(especially%2520for%2520Women).jpeg": "0f8f4f0a8a9b084a4995dee47f3a2c06",
"assets/assets/Jamieson%2520Odourless%2520Garlic%2520.jpeg": "864df49b2c3d299c378484965573f93d",
"assets/assets/A%2520Vogel%2520Allery%2520Relief.jpeg": "10843beaa079f23caf13cb404f1899ad",
"assets/assets/Centrum%2520Women.jpeg": "08a1481f85ec6c72ac02ca7ea610cfac",
"assets/assets/Aronia%2520Blueberry.jpeg": "f071eeeb2084cd6da39a3dd70f949fdd",
"assets/assets/Jamieson%2520Chewables%2520Juicy%2520Wild%2520Blueberry%2520Vitamin%2520C.jpeg": "c0855fbbd7b625509df5d5b8fb5be312",
"assets/assets/Jamieson%2520Grape%2520Seed%2520Antioxidant%2520Support.jpeg": "698da58888c0baf8eb5bbf56fedab61d",
"assets/assets/Essiac%2520Herbal%2520Extract.jpeg": "4a9e4bc69d47c7b2d81a70f17898ce33",
"assets/assets/Centrum%2520Men.jpeg": "1d8e0007cb6d6d225e5a1587958711b6",
"assets/assets/Aveeno%2520Baby%2520Calming%2520Comfort%2520Lotion.jpeg": "9f8879fcd2530a8eaa5b177e5a5e50ca",
"assets/assets/Webber%2520Naturals%2520Triple%2520Strength%2520Omega-3.jpeg": "4e87e8c17fc6ff522253e55f8062b899",
"assets/assets/Organika%2520Reishi%2520Mushroom%2520Extract.jpeg": "37afd31b5a5a0c688ee4e93208c2fc97",
"assets/assets/BEC%2520Liquid%2520Calcium%2520with%2520Vitamin%2520B3.jpeg": "48a9104a6c2daf1228abd49f8afff761",
"assets/assets/Ontario%2520Pure%2520Ginseng%2520Main%2520Root%2520(Product%2520of%2520Canada).jpeg": "4d72e5e5c5bac6c42dec14e93bdc6b87",
"assets/assets/Codeco%2520Omni%2520Eye%2520Care.jpeg": "a4fd34cbf71efc4d7aa96da27b41e038",
"assets/assets/Dr.%2520Bronner's%252018-in-1%2520Rose%2520Pure-%2520Castile%2520Soap.jpeg": "5799b4943bde9872408a37d2fe88b459",
"assets/assets/IronKids%2520Essential%2520Gummies%2520Omega%25203.jpeg": "bac0aa9ebc1c967f6eeccb9eb4c77c35",
"assets/assets/Omega%2520Alpha%2520LessTerol.jpeg": "cae8b933f1123b237817fb9dbecbee95",
"assets/assets/Jamieson%2520Lutein-z.jpeg": "b4404d707698e925c0bab177e749b7a9",
"assets/assets/Kirkland%2520Fish%2520Oil%2520Blend.jpeg": "0cbb61a0709de9ee59a9c6fd31c86d20",
"assets/assets/Jamieson%2520Ultra%2520Stength%2520Vitamin%2520B%2520100.jpeg": "35ff6b53aee8347a7d19c6a418a379e0",
"assets/assets/Jamieson%2520Saw%2520Palmetto.jpeg": "dd31f418280b0d5a72f073df8a34822c",
"assets/assets/Jamieson%2520Cod%2520Liver%2520Oil%2520with%2520Vitamin%2520A%2520+%2520D3.jpeg": "ae91abfd8b9ee0581366ace598fca9ab",
"assets/assets/BEC%2520Bee%2520Proplis.jpeg": "98d69d66f628b351c937231cf0f6cd90",
"assets/assets/Jamieson%2520Multi%2520100%2525%2520Complete%2520Vitamin%2520(Women%252050+).jpeg": "f0401cece34af6ffb08111788671b767",
"assets/assets/Jamieson%2520Selenium.jpeg": "631042462d9036c57c759d437c3f76fc",
"assets/assets/Omega%2520Alpha%2520%2520Kidney%2520Plus.jpeg": "408d948cd4841b7823720c7f3bed1361",
"assets/assets/Ddrops%2520booster%2520Liquid%2520Vitamin%2520D3.jpeg": "63224ae10c3dd46fa2b66c23a3661b13",
"assets/assets/SISU%2520Co%2520Q10%2520(100%2520mg).jpeg": "51fe0d6ca7e5ee17ea6aa5ef303a394f",
"assets/assets/Jamieson%2520Evening%2520Primrose%2520Oil.jpeg": "e72049ffe340462845ecc3fb2a816395",
"assets/assets/Pon%2520Lee%2520Propolis%2520Glycolic%2520Extract.jpeg": "1638af83bac5f5c9eaf088e0b4d83b49",
"assets/assets/Enfomil%2520A+%2520Baby%2520Formula.jpeg": "fdf07f6bfae01cc3102fbfc24c8e635d",
"assets/assets/OceanLegend%2520Dried%2520Sea%2520Cucumber.jpeg": "d9e32e5b1d39ebdb8b58855a178dedc6",
"assets/assets/Webbers%2520Naturals%2520Omega-3%2520&%2520CoQ10.jpeg": "cc50f647346c0c99aa1653c08080c37e",
"assets/assets/Omega%2520Alpha%2520Veggie%2520Fruit%2520Plus.jpeg": "4a83e166badf27dff97f3a3c6681ed86",
"assets/assets/Jamison%2520Chelated%2520Chromium%2520.jpeg": "898a16737bcb2a9dffa6e3f88f800c8d",
"assets/assets/Webber%2520Naturals%2520Vitamin%2520e.jpeg": "1e22e9d331a19a8bd7884c4c5da0a245",
"assets/assets/Bill%2520Natural%2520Sources%2520Placenta%2520and%2520Aloa%2520Vera%2520with%2520Vitamin%2520E.jpeg": "bc261f4e6a05e4660dacde26aa70690d",
"assets/assets/Nordic%2520Natural%2520Children's%2520DNA%2520%2520(530%2520mg%2520Omega%25201).jpeg": "83a26b7639ac5e45d1c986d0e07b70f3",
"assets/assets/Jamieson%2520Fast%2520Dissolving%2520Meltaonin%2520(3%2520mg).jpeg": "d551d0d8ec5296b5a1d797a149af044d",
"assets/assets/Organika%2520Hair%2520Plus.jpeg": "1acd8cb74cc121f1696e75a592c71252",
"assets/assets/DHA%2520Vegetarian%2520Algae%2520(Docosahexaenoic%2520acid).jpeg": "a5ca7b7a0c329cf7eb9b0397ef1783fb",
"assets/assets/Jamieson%2520Vitamin%2520B12.jpeg": "7ce2e91eaa461fbfd921d562ad97b984",
"assets/assets/Iron%2520Kids%2520Essential%2520Gummies%2520Calcium.jpeg": "296c85706a55a203ef6e9073cf96eb0d",
"assets/assets/Wedderspoon%2520Manuka%2520Honey.jpeg": "57cdb97f241803f97b2426cef121d081",
"assets/assets/Vital%2520Life%2520Heap%2520Seal%2520Oil%2520Omega%25203.jpeg": "426595aa77a82088d74f3a9e6e0834e6",
"assets/assets/Jamieson%2520Glucosamine%2520Chondroiton%2520MSM%2520(Ultra%2520Strength).jpeg": "39bf655ceaa713845a1275dff8a00429",
"assets/assets/Jamieson%2520Bilberry%2520Antioxidant%2520for%2520Eye%2520Health.jpeg": "f2d7180b04b4cc7f261314114377bd36",
"assets/assets/Jamieson%2520Chewable%2520Cold%2520Fighter.jpeg": "a2527c1d33cc1bb8faa54810a59d731a",
"assets/assets/Jamieson%2520Effervescent%2520Natural%2520Orange%2520Vitamin%2520C%2520(1000%2520mg).jpeg": "d3ee032f3751da127e8c91b919daba09",
"assets/assets/Kirkland%2520Glucosamine%2520Sulfate.jpeg": "9ff8635fc759b04a0aba5a8f4af3fdde",
"assets/assets/Medela%2520Swing%2520Single%2520Breastpump.jpeg": "db4220d90c4690c46f1830c5e2a3d5d0",
"assets/assets/logo.png": "a3e9296d3b20a7a4feb522d37614299b",
"assets/assets/Jamieson%2520Curcumin%2520Tumeric%2520(550%2520mg).jpeg": "1ba5efc1ecd4606bc1d97257ddb5a12f",
"assets/assets/Codeco%2520Liver%2520Protect.jpeg": "acfd84dd03feea5f6c20eae564d5522c",
"assets/assets/Natural%2520Factors%2520Soy%2520Isoflavone%2520.jpeg": "e24263bbfed6c5f66c12ba7ca8e3bf00",
"assets/assets/Smart%2520Solutions%2520Active%2520Collagen.jpeg": "55177914ae1cd5d2bf462524f178a585",
"assets/assets/MapleLife%2520Harp%2520Seal%2520Omega%25203.jpeg": "ebe0efb09fe4cbab5bd458d9ad8b8720",
"assets/assets/Tera%2520Nova%2520Omega%25203.jpeg": "3093a2a8e678213e4f9f9f0046adbb99",
"assets/assets/AgeoOff%2520Collagen%25202.0.jpeg": "23beabbbb3ebf837fd1959473aa195a1",
"assets/assets/BEC%2520Fish%2520Oil%2520Omega%25203.jpeg": "344e25a6d7c3cfdcd2ec796be27f4760",
"assets/assets/Alba%2520Bontanica%2520Hawaiin%2520Facial%2520Wash%2520Deep%2520Cleansing%2520Coconut%2520Milk.jpeg": "02b6288100ee4280cf6fc343ca67ba7b",
"assets/assets/Prostate%2520Health%2520Super%2520Prostate%2520Advanced%2520Multi-Ingredient%2520Formula.jpeg": "38908596e9d7e265ce6cf97d3feaffbb",
"assets/assets/Perucian%2520Gold%2520MACA.jpeg": "a66acc57cd3e89b1a9957410168c1ab1",
"assets/assets/Jamieson%2520Softgels%2520Vitamin%2520D3.jpeg": "850dc337e0032f7b8661f7d5707f5da5",
"assets/assets/Ginseng%2520Powder.jpeg": "2982f05256875c1a1e270f12915da956",
"assets/assets/Culturelle%2520Probiotic%2520Kids.jpeg": "8d406119cf4908b898648af94fd2ff1d",
"assets/assets/Osteo%2520Joint%2520Ease%2520for%2520Chronic%2520Pain.jpeg": "da9d30cc2f7daec37a588ec551cbecf9",
"assets/assets/Omega%2520Alpha%2520Protein%2520Multi%2520Plus%2520.jpeg": "d3ce0c557e2cade240d3fda596c65d4f",
"assets/assets/SISU%2520Lutein.jpeg": "c795044cce25d528e4abba2c3bc3afbf",
"assets/assets/Kirkland%2520Omega-3%2520Fish%2520Oil.jpeg": "33a834c31ba7bac2624e27dd6c68829f",
"assets/assets/Centrum%2520Men%252050+.jpeg": "68db7d4e5b5a30a48f8a15c9c9613cef",
"assets/assets/Kirkland%2520Glucosamine%2520Chondroitin%2520&%2520MSM.jpeg": "f878009eada365ab6019a25848a2d279",
"assets/assets/Maple%2520Life%2520MaxiFlex%2520Natural%2520Healing%2520&%2520High%2520Potency.jpeg": "dada9eb8b060d38c225450627aa0d684",
"assets/assets/BEC%2520Men's%2520Essential%2520(Generation%25202).jpeg": "d7fa9a8bd8338a3235809ff6fa4b1b24",
"assets/assets/Aveeno%2520Baby%2520Smoothing%2520Hydration%2520Moisture%2520Cream.jpeg": "1eddf87d683881afe325e511be63be42",
"assets/assets/Omega%2520Alpha%2520%2520Liver%2520Plus.jpeg": "fa7d66f73505556a38839dd44be84ec9",
"assets/assets/Jamieson%2520Resveratrol.jpeg": "ded92fd32a6729fb657025afd4bc8b89",
"assets/assets/Health%2520Balance%2520Lecithin%2520Natural%2520Source%2520Unbleached.jpeg": "4b59505c27f410c8d6c7b33820a68fe4",
"assets/assets/Flora%2520Milk%2520Thistle%2520Plus.jpeg": "ceac0053af25d0762381581bf28ac166",
"assets/assets/Holista%2520Remedites%2520Liquid%2520Softgel%2520Milk%2520Thistle%2520.jpeg": "d2fd5ee3ca19e57f7fa0b58a6d8e611b",
"assets/assets/Nature's%2520Acid%2520Lavendar%2520and%2520Honey%2520Soap%2520.jpeg": "60939cf140f87a169c474b6534110d33",
"assets/assets/Organika%2520Milk%2520Thistle.jpeg": "a423d47ba9f8638c0f0f09cb91418ca0",
"assets/assets/SISU%2520Milk%2520Thistle%2520Complex.jpeg": "b6a34a6b2bf8258cec6fce297bb9817d",
"assets/assets/Enfomil%2520A+%2520Baby%2520Formula%2520(Eco-Value%2520Pack).jpeg": "c5990ec82b936d440f537ef39d7b4086",
"assets/assets/Codeco%2520Multi%2520Forte.jpeg": "8aaeec67237bd4248edd32a00926d8ae",
"assets/assets/Golden%2520Silver%2520Flower%2520Tea.jpeg": "108bfd5042fd26ee57b5d07a0dbedbb9",
"assets/assets/Jamieson%2520Co%2520Q10%2520(Extra%2520Strength).jpeg": "c6b27d9ebc5400a8144e57a70473b4cd",
"assets/assets/Sisu%2520U-Cubes%2520Kids%2520Vitamin%2520Gummies.jpeg": "73956a6047f66917ac3e8bc1d6ce4530",
"assets/assets/Omega%2520Alpha%2520Vitamin%2520D3%2520Concentrated%2520Kid's%2520drops.jpeg": "224beecd422f2609a83fdeeacf113b26",
"assets/assets/BILL%2520Children's%2520Colostrum%2520Chewables.jpeg": "0293a97d275081e2b5bf1ab77d2333ca",
"assets/assets/Wild%2520Sea%2520Cucumber.jpeg": "1c9771bbb8c00c41c167e2a9af144634",
"assets/assets/MapleLife%2520Gout%2520Relief.jpeg": "82b3cc74d916543f62a75df5e7c0f6b6",
"assets/assets/Omega%2520Alpha%2520Ginkgo%2520Biloba.jpeg": "7a18b2d055501d2a354303206069da9e",
"assets/assets/Jamieson%2520Prenatal%2520.jpeg": "f0ebfd5f189040825dea5467b6b99813",
"assets/assets/Omega%2520Alpha%2520Ultra%2520Probiotic%2520Plus.jpeg": "1d1464104e659ad74a8df7c25e09adff",
"assets/assets/Pure%2520Maple%2520Syrup%2520Candies.jpeg": "80c37be1bb243825e063516868b1cf79",
"assets/assets/Bill%2520Seal%2520Oil%2520Omega%25203.jpeg": "ff35bf01fb4400e3ec224b19fce771c6",
"assets/assets/Organika%2520Mushroom%2520Extract%2520Reishi.jpeg": "6642ca722533284f67947ec1ea9170f3",
"assets/assets/Jamieson%2520Probiotic%252010%2520Billion%2520Active%2520Cells.jpeg": "925d72de664da531bf0f677e1ff4449a",
"assets/assets/BILL%2520Natural%2520WildBlueBerry%2520Chewables.jpeg": "e82d5efdcc779747a6d0a7f7cbc4361d",
"assets/assets/Jamieson%2520Gummies%2520Apple%2520Cider%2520Vinegar%2520(Chromium).jpeg": "aef5d9caf1db8c10d58723c359c0c86a",
"assets/assets/BEC%2520Lecithin.jpeg": "f336404136800667b6974e8f28526c43",
"assets/assets/BEC%2520Grape%2520Seed%2520Extract%2520OPC.jpeg": "c16890b268700941d8f6c740ef017edc",
"assets/assets/Jamieson%2520Calcium%2520Magnesium.jpeg": "b11d38c3fee04d666e68ca0dcb6866ea",
"assets/assets/Apiario%2520Propolic%2520Glycolic%2520Solution.jpeg": "5803ea1d9739dd41afa3a195d44346ec",
"assets/assets/Organika%2520Chanca%2520Piedra.jpeg": "bf09461f5aaf8988f58038f1f304c08b",
"assets/assets/Omega%2520Alpha%2520%2520Anti%2520FlamX.jpeg": "3f4b50da44e5fd7f6efb5ca288390a40",
"assets/assets/Kids%2520Ddrops%2520Liquid%2520Vitamin%2520D3%2520.jpeg": "84e267c45d19108dbba42be64c36017a",
"assets/assets/Jamieson%2520Probiotic%2520Drops.jpeg": "d2c1cb840490e7508b2ac00f13a988f8",
"assets/assets/Jamieson%2520Vitamin%2520E%2520(extra%2520strength).jpeg": "0a1cc65cb9fc6fe3c1e6698556e464cb",
"assets/assets/Webber%2520Naturals%2520Ginkgo%2520Biloba.jpeg": "d1f34e3f6ee6fcba67869f1a7a4d090f",
"assets/assets/Alpha%2520Omega%2520Glucolizer.jpeg": "2bd0014701591cce51aeee2171fad631",
"assets/assets/Organika%2520Blood%2520Sugar%2520Control%2520Vegetarian%2520Capsules.jpeg": "839508b653b83540e26114802da1395b",
"assets/assets/Codecol%2520Nanaco%2520Ultimate%2520Calcium%2520Supplement.jpeg": "cf1d1ace93ddf6c531d1533a89461303",
"assets/assets/Nestle%2520Materna%2520Multivitamins.jpeg": "5fe50866e272cdf3f568f7f32576dc14",
"assets/assets/Bill%2520Facial%2520Oil%2520with%2520Placental%2520Protein%2520.jpeg": "14da5f45778accde2939726f20c9535c",
"assets/assets/BEC%2520Spiruline.jpeg": "b1f75a5f91a1a4eeaa8a6b68d9f761b0",
"assets/assets/Natural%2520Factors%2520Vitex%2520Regulates.jpeg": "4fe253b326c9a9a65b5166700de403b7",
"assets/assets/Omega%2520Alpha%2520GlucosaPlex.jpeg": "2514ae849e665d4fad9e773e2271599d",
"assets/assets/Jamieson%2520Multi%2520100%2525%2520Complete%2520Vitamin%2520(Men).jpeg": "e52881c345cd16b021697a3deeebaf47",
"assets/assets/Jamieson%2520Omega-3%2520Select.jpeg": "cb236dfa22f5fed6bd85893187a936f7",
"assets/assets/Jamieson%2520Milk%2520Thistle%2520.jpeg": "8270bc3d78929257c641fd4c0d5b8d80",
"assets/assets/Joint%2520Ease%2520Glucosamine%2520Chondroitin%2520Extra%2520Strength%2520.jpeg": "ce4f2f05bb60c52f03a0b802f0fb352e",
"assets/assets/Jamieson%2520Maximum%2520Concentrate%2520Cranberry%2520Complex.jpeg": "c7b03c7fd6df99142ab5743657b032a9",
"assets/assets/Jamieson%2520Timed%2520Release%2520Vitamin%2520B%2520.jpeg": "8c0b72cb059dc129eff928f0b84d1e30",
"assets/assets/Jamieson%2520Mega%2520Cal%2520Calcium+%2520D3.jpeg": "a99ca6542581cc015bc31d982c19d7e0",
"assets/assets/Jamieson%2520Melatonin%2520.jpeg": "ec588fb629d631e9447c2e5afac98b9d",
"assets/assets/Jamieson%2520Extrastength%2520Probiotic%2520Gummies.jpeg": "43aab4fe006a3966ee42330eb60dcfd1",
"assets/assets/Omega%2520Alpha%2520Echinacia.jpeg": "33317873fc6c05a584c5386c3b12fe16",
"assets/assets/Jamieson%2520Gummies%2520Multi%2520Vitamins.jpeg": "3a3be6e8bb3f9f5b432d13a1af230e7c",
"assets/assets/Flora%2520Udo's%2520Oil%2520Omega%25203+6+9%2520Blend.jpeg": "a8ef8db43449a22e36b6ac1666bf3759",
"assets/assets/Jamieson%2520Gummies%2520Elderberry%2520Vitamin%2520C%2520+.jpeg": "e793e84d80bcb41ec4120680c311d285",
"assets/assets/VitaX%2520Revita%2520Capsules.jpeg": "156a7d5155321e5aa2f382c463d3284c",
"assets/assets/Kids%25200-9%2520Night%2520Syrup.jpeg": "dc34e5190fe556ff51007b891be1045f",
"assets/assets/Kirkland%2520Coenzyme%2520Q10%2520(200%2520mg).jpeg": "d49de641fdf689fef5078c2f42e9a0f0",
"assets/assets/Jamieson%2520Folic%2520Acid%2520(400%2520mg).jpeg": "7c7d7325d4508a54380929efc8fd1174",
"assets/assets/Jamieson%2520Vitamin%2520A.jpeg": "72aca9c4b0c8f95c735daf75da5e92c1",
"assets/assets/Organika%2520Premium%2520Liga-Joint.jpeg": "45a4d5ed2ffac0e250d2a683be9ccbc7",
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
