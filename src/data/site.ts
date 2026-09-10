export type Category = {
  name: string;
  slug: string;
  description: string;
  icon: string;
  count: number;
};

export type SocialLink = {
  platform: 'tiktok' | 'instagram' | 'facebook' | 'youtube' | 'x' | 'linkedin';
  url: string;
};

export type Company = {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  city: string;
  citySlug: string;
  district: string;
  districtSlug: string;
  rating: number;
  reviewCount: number;
  service: string;
  shortDescription: string;
  description: string;
  image: string;
  price: string;
  phone: string;
  secondaryPhone?: string;
  address: string;
  workingHours: string;
  mapsEmbedUrl: string;
  mapsLink: string;
  isVerified: boolean;
  heroBadge?: string;
  tiktokVideoUrl?: string;
  products?: { title: string; description: string }[];
  services?: { title: string; description: string }[];
  seoArticle?: string[];
  socials?: SocialLink[];
};

export type City = {
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
};

export const categories: Category[] = [
  { name: 'Mimarlık', slug: 'mimarlik', description: 'Profesyonel tasarım ve inşaat çözümleri', icon: '🏗️', count: 128 },
  { name: 'Sağlık', slug: 'saglik', description: 'Uzman doktor ve klinik rehberleri', icon: '🩺', count: 96 },
  { name: 'Emlak', slug: 'emlak', description: 'Konut ve ticari mülk fırsatları', icon: '🏠', count: 214 },
  { name: 'Yazılım', slug: 'yazilim', description: 'Geliştirme ve dijital dönüşüm hizmetleri', icon: '💻', count: 173 },
  { name: 'Gıda', slug: 'gida', description: 'Restoran ve catering seçenekleri', icon: '🍽️', count: 89 },
  { name: 'Güvenlik', slug: 'guvenlik', description: 'Koruma ve güvenlik çözümleri', icon: '🛡️', count: 74 },
  { name: 'Kaporta', slug: 'kaporta', description: 'Transit kesim, kaporta imalatı ve özel araç dönüşümü', icon: '🚚', count: 34 }
];

export const companies: Company[] = [
  {
    id: 'karaşahin-kaporta',
    name: 'Karaşahin Kaporta',
    slug: 'karasahin-kaporta',
    category: 'Kaporta',
    categorySlug: 'kaporta',
    city: 'Nevşehir',
    citySlug: 'nevsehir',
    district: 'Nevşehir Merkez',
    districtSlug: 'nevsehir-merkez',
    rating: 4.9,
    reviewCount: 86,
    service: 'Transit kesim ve kaporta tadilatı',
    shortDescription: 'Ford Transit ve benzeri ticari araçlar için profesyonel kesim, kaporta ve özel kasa çözümleri.',
    description: 'Nevşehir Sanayi Sitesi’nde faaliyet gösteren Karaşahin Kaporta, araç kullanım amacınıza uygun ve verimli çözümler sunar. Aydoğan Karaşahin liderliğinde, ticari ve özel araçlar için transıt kesim, kaporta imalatı, özel kasa üretimi ve genel kaporta onarım hizmetleri vermektedir.',
    image: '/firmalar/karasahin/Hero.jpeg',
    price: 'İletişime geçin',
    phone: '+90 545 113 53 50',
    secondaryPhone: '+90 534 421 72 30',
    address: 'Lale Mahallesi, Sümer, Sanayi Sitesi Sk. No:14 Blok No:25, 50040 Nevşehir Merkez/Nevşehir',
    workingHours: 'Hafta içi 08:00 - 20:00',
    mapsEmbedUrl: 'https://www.google.com/maps?q=Lale%20Mahallesi%2C%20S%C3%BCmer%2C%20Sanayi%20Sitesi%20Sk.%20No%3A14%20Blok%20No%3A25%2C%2050040%20Nev%C5%9Fehir%20Merkez%2FNev%C5%9Fehir&output=embed',
    mapsLink: 'https://maps.google.com/?q=Lale%20Mahallesi%2C%20S%C3%BCmer%2C%20Sanayi%20Sitesi%20Sk.%20No%3A14%20Blok%20No%3A25%2C%2050040%20Nev%C5%9Fehir%20Merkez%2FNev%C5%9Fehir',
    isVerified: true,
    heroBadge: 'Transit kesim uzmanı',
    tiktokVideoUrl: 'https://vt.tiktok.com/ZSqDWmyog/',
    services: [
      { title: 'Transit kesim', description: 'Ford Transit ve benzeri ticari araçlar için kullanım amacına uygun özel kesim ve düzenleme çözümleri.' },
      { title: 'Kaporta imalatı', description: 'Araç şasisine uygun, dayanıklı ve estetik kaporta üretimi ve onarımları.' },
      { title: 'Özel kasa üretimi', description: 'Kargo, taşıma ve ticari kullanım için özel boyutlu kasa ve modül çözümleri.' },
      { title: 'Genel kaporta onarım', description: 'Hasarlı bölge tamiri, yenileme ve performans odaklı rötuş işlemleri.' }
    ],
    products: [
      { title: 'Transit kilitli kasa', description: 'Seyahat ve yük taşıma için güvenli, dayanıklı ve geniş iç hacimli kasa çözümü.' },
      { title: 'Özel ticari araç düzeni', description: 'İşletme ihtiyacına göre kişiselleştirilmiş iç düzen ve kullanım alanı tasarımı.' },
      { title: 'Kaporta yenileme paketi', description: 'Araç gövdesini modern ve estetik görünümle yeniden tasarlama hizmeti.' }
    ],
    seoArticle: [
      'Karaşahin Kaporta, Nevşehir’de ticari araç kullanımı için güvenilir, estetik ve işlevsel çözümler sunan bir kaporta ve transit kesim uzmanıdır. Ford Transit ve benzeri araçlar için özel ölçü ve kullanım ihtiyacına göre tasarlanan hizmetler, işletmelerin taşıma kapasitesini artırır.',
      'Şirket, transit kesim, kaporta imalatı, özel kasa üretimi ve genel kaporta onarım hizmetleriyle araç sahiplerine pratik çözümler sunmaktadır. Her işin amacına uygun tasarım yaklaşımı, hem yük güvenliğini hem de araç görsel bütünlüğünü koruyarak uzun ömürlü kullanım sağlar.',
      'Nevşehir merkezde faaliyet gösteren Karaşahin Kaporta, müşteri odaklı çalışma prensibiyle araçlarının kullanım amacına göre özelleştirme yapar. Bu yaklaşım, ticari araç sahiplerinin iş verimliliğini artırırken, araçları daha düzenli ve profesyonel bir görünüme kavuşturur.',
      'Yüksek kaliteli malzeme, dikkatli üretim ve ölçü kontrolü ile sunulan çözümler, firmaların güvenilir bir kaporta partneri aramasında öne çıkan unsurlardandır. Karaşahin Kaporta, araçlarını daha işlevsel ve daha verimli kullanmak isteyenler için kapsamlı çözümler üretmeye devam etmektedir.'
    ],
    socials: [
      { platform: 'tiktok', url: 'https://www.tiktok.com/@sertkayaotmtiv' }
    ]
  },
  {
    id: 'aster-design-studio',
    name: 'Aster Design Studio',
    slug: 'aster-design-studio',
    category: 'Mimarlık',
    categorySlug: 'mimarlik',
    city: 'İstanbul',
    citySlug: 'istanbul',
    district: 'Şişli',
    districtSlug: 'sisli',
    rating: 4.9,
    reviewCount: 218,
    service: 'Mimari danışmanlık',
    shortDescription: 'Modern yaşam alanları tasarlayan premium mimari ekip.',
    description: 'Modern yaşam alanları tasarlayan premium mimari ekip.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    price: 'Paket fiyatı',
    phone: '+90 212 555 12 34',
    address: 'İstanbul, Şişli',
    workingHours: 'Hafta içi 09:00 - 18:00',
    mapsEmbedUrl: 'https://www.google.com/maps?q=%C5%9E%C5%9Fli%2C%20%C4%B0stanbul&output=embed',
    mapsLink: 'https://maps.google.com/?q=%C5%9E%C5%9Fli%2C%20%C4%B0stanbul',
    isVerified: true
  },
  {
    id: 'bluestone-emlak',
    name: 'BlueStone Emlak',
    slug: 'bluestone-emlak',
    category: 'Emlak',
    categorySlug: 'emlak',
    city: 'Ankara',
    citySlug: 'ankara',
    district: 'Çankaya',
    districtSlug: 'cankaya',
    rating: 4.8,
    reviewCount: 164,
    service: 'Satılık daire',
    shortDescription: 'Şehir merkezine yakın, yüksek konforlu yatırım fırsatları.',
    description: 'Şehir merkezine yakın, yüksek konforlu yatırım fırsatları.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
    price: 'İletişime geçin',
    phone: '+90 312 555 44 11',
    address: 'Ankara, Çankaya',
    workingHours: 'Hafta içi 09:00 - 18:00',
    mapsEmbedUrl: 'https://www.google.com/maps?q=%C3%87ankaya%2C%20Ankara&output=embed',
    mapsLink: 'https://maps.google.com/?q=%C3%87ankaya%2C%20Ankara',
    isVerified: true
  },
  {
    id: 'luma-klinik',
    name: 'Luma Klinik',
    slug: 'luma-klinik',
    category: 'Sağlık',
    categorySlug: 'saglik',
    city: 'İzmir',
    citySlug: 'izmir',
    district: 'Bornova',
    districtSlug: 'bornova',
    rating: 4.7,
    reviewCount: 341,
    service: 'Diş ve estetik',
    shortDescription: 'Güncel teknolojiyle bireysel bakım odaklı sağlık hizmetleri.',
    description: 'Güncel teknolojiyle bireysel bakım odaklı sağlık hizmetleri.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
    price: 'Randevu al',
    phone: '+90 232 555 77 88',
    address: 'İzmir, Bornova',
    workingHours: 'Hafta içi 09:00 - 21:00',
    mapsEmbedUrl: 'https://www.google.com/maps?q=Bornova%2C%20%C4%B0zmir&output=embed',
    mapsLink: 'https://maps.google.com/?q=Bornova%2C%20%C4%B0zmir',
    isVerified: true
  },
  {
    id: 'northpeak-yazilim',
    name: 'Northpeak Yazılım',
    slug: 'northpeak-yazilim',
    category: 'Yazılım',
    categorySlug: 'yazilim',
    city: 'Bursa',
    citySlug: 'bursa',
    district: 'Nilüfer',
    districtSlug: 'nilufer',
    rating: 4.9,
    reviewCount: 132,
    service: 'Web geliştirme',
    shortDescription: 'Kurumsal yazılım çözümleri ve modern dijital ürünler.',
    description: 'Kurumsal yazılım çözümleri ve modern dijital ürünler.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    price: 'Teklif al',
    phone: '+90 224 555 98 76',
    address: 'Bursa, Nilüfer',
    workingHours: 'Hafta içi 09:00 - 18:00',
    mapsEmbedUrl: 'https://www.google.com/maps?q=Nil%C3%BCfer%2C%20Bursa&output=embed',
    mapsLink: 'https://maps.google.com/?q=Nil%C3%BCfer%2C%20Bursa',
    isVerified: true
  }
];

export const cities: City[] = [
  { name: 'İstanbul', slug: 'istanbul', description: 'Yüksek talep ve geniş firma ağı', image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80', count: 418 },
  { name: 'Ankara', slug: 'ankara', description: 'Kurumsal hizmetler ve ticaret merkezi', image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80', count: 312 },
  { name: 'İzmir', slug: 'izmir', description: 'Turizm, hizmet ve yaşam kalitesi', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80', count: 267 },
  { name: 'Bursa', slug: 'bursa', description: 'Sanayi ve modern yaşam ekosistemi', image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=80', count: 201 },
  { name: 'Nevşehir', slug: 'nevsehir', description: 'Ticari araç dönüşüm ve kaporta uzmanlığı', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80', count: 12 }
];

export const steps = [
  { title: 'Arama yap', description: 'Kategori, şehir ve ilçe seçerek doğru firmayı bulun.' },
  { title: 'Karşılaştır', description: 'Puan, yorum ve hizmet detaylarını tek ekranda görün.' },
  { title: 'İletişime geç', description: 'Telefon, e-posta veya web sitesi üzerinden hızlı iletişim kur.' }
];

export const reasons = [
  { title: 'Doğru firma', description: 'İhtiyacınıza en uygun sektörel seçenekleri filtreleyin.' },
  { title: 'Yerel SEO', description: 'Şehir ve ilçe bazlı aramalarda daha görünür olun.' },
  { title: 'Güvenilir profil', description: 'Yorum, puan ve hizmet bilgileriyle karar vermeyi kolaylaştırın.' },
  { title: 'Hızlı erişim', description: 'En kritik bilgileri tek sayfada toplayan modern arayüz.' }
];

export const seoContent = [
  'FirMaps, şehir ve ilçe bazlı firma aramalarında kullanıcıların doğru adrese ulaşmasını kolaylaştırır.',
  'Kategorilere göre filtreleme, sektör odaklı rehberlik ve güçlü yerel arama desteği sunar.',
  'Modern web yapısı sayesinde firmalar, hizmetler ve şehirler arasında güçlü iç bağlantı ağı kurulur.'
];
