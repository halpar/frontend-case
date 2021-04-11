/* eslint-disable sonarjs/no-duplicate-string */
export default {
    successfulLoginMsg: 'Giriş başarılı',
    failedLoginMsg: 'Bir şeyler ters gitti :(',
    welcomeMessage: 'Merhaba',
    logout: 'Çıkış Yap',
    login: 'Giriş Yap',
    landingPage: {
        bannerSection: {
            motto: 'Modern paylaşım platformu',
            text: 'Hedef kitlenizi büyütün ve çevrimiçi markanızı oluşturun',
            buttonLeft: 'Ücretsiz Dene',
            buttonRight: 'Bilgi Al',
        },
        featuresSection: {
            title1: 'Ücretsiz, açık, basit',
            title2: 'Performansı güçlü araçlar',
        },
        infrastructureSection: {
            title: 'Son Teknoloji Altyapı',
        },
        overviewSection: {
            motto: ' Gelecek için tasarlandı',
            title: 'Genişletilebilir bir düzenleyiciyle tanışın',
            description:
                'Blogr, tek bir şeye odaklanmanızı sağlayan son derece sezgisel bir arayüze sahiptir: içerik oluşturma. Düzenleyici, birden fazla blogun yönetimini destekler ve görüntüler, videolar ve Markdown gibi yerleştirmelerin kolay manipülasyonuna izin verir. Eklentiler ve temalarla genişletilebilirlik, işlevsellik eklemek veya bir blogun görünümünü değiştirin.',
            title2: 'Sağlam içerik yönetimi',
        },
    },
    userHeaderContent: [
        {
            id: 1,
            name: 'Ana Sayfa',
            path: '/',
        },
        {
            id: 2,
            name: 'Bize ulaşın',
            path: '/contact-us',
        },
        {
            id: 3,
            name: 'Merhaba Scorp',
            path: '/',
        },
    ],
    guestHeaderContent: [
        {
            id: 1,
            name: 'Ana Sayfa',
            path: '/',
        },
        {
            id: 2,
            name: 'Bize Ulaşın',
            path: '/contact-us',
        },
    ],

    footerData: [
        {
            id: 1,
            title: 'Ürün',
            datas: [
                {
                    id: 1,
                    name: 'Genel Bakış',
                    path: '/',
                },
                {
                    id: 2,
                    name: 'Fiyatlandırma',
                    path: '/',
                },
                {
                    id: 3,
                    name: 'Market',
                    path: '/',
                },
                {
                    id: 4,
                    name: 'Özellikler',
                    path: '/',
                },
                {
                    id: 5,
                    name: 'Entegrasyonlar',
                    path: '/',
                },
            ],
        },
        {
            id: 2,
            title: 'Company',
            datas: [
                {
                    id: 6,
                    name: 'Hakkında',
                    path: '/',
                },
                {
                    id: 7,
                    name: 'Takım',
                    path: '/',
                },
                {
                    id: 8,
                    name: 'Blog',
                    path: '/',
                },
                {
                    id: 9,
                    name: 'Kariyer',
                    path: '/',
                },
            ],
        },
        {
            id: 3,
            title: 'İletişim',
            datas: [
                {
                    id: 10,
                    name: 'Bize ulaşın',
                    path: '/contact-us',
                },
                {
                    id: 11,
                    name: 'Haberler',
                    path: '/',
                },
            ],
        },
    ],
    formPlaceholders: {
        name: 'Ad',
        email: 'Soy ad',
        password: 'Şifre',
        phone: 'Telefon numarası',
        country: 'Ülke',
        message: 'Açıklama',
    },
    formMessages: {
        successfulFormSubmit: 'Mesajınız iletildi, konsol logu kontrol edebilirsin :)',
        failedFormSubmit: 'Hatalı deneme , lütfen tekrar deneyin :(',
    },

    countryList: [
        { id: 'TR', name: 'Türkiye' },
        { id: 'US', name: 'Amerika' },
        { id: 'GB', name: 'İngiltere' },
        { id: 'DE', name: 'Almanya' },
        { id: 'SE', name: 'İsviçre' },
        { id: 'KE', name: 'Kenya' },
        { id: 'BR', name: 'Brazilya' },
        { id: 'ZW', name: 'Zimbabwe' },
    ],
};
