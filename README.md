# My Connect Four Game

## Proje Tanımı

Bu proje, "Connect Four" adlı bir masa oyununu dijital bir formatta simüle eden bir web uygulamasını içermektedir. Oyunun kullanıcı arayüzü, üç ana sayfadan oluşmaktadır: Game Creation Screen, Game Screen ve List of Games Screen.

## 1. Game Creation Screen

Bu sayfa, oyuncuların oyun başlamadan önce gerekli bilgileri girdiği bir başlangıç noktasıdır. Aşağıdaki özelliklere sahiptir:

- **Game Name:** Oyunun adını belirler.
- **Player Names:** İki oyuncunun isimlerini girer.
- **Player Disk Colors:** Her oyuncunun disk rengini seçer.
- **Background Color:** Oyun arka planının rengini belirler.
- **Start Game Button:** Oyuncuların girdiği bilgileri kontrol eder ve eksik bilgi varsa uyarı verir. Tüm bilgiler doğru girildiyse, Game Screen'e geçiş yapar.

## 2. Game Screen

Oyunun gerçekleştiği ana ekran. İşte bu ekranın özellikleri:

- **Player Greeting:** İlk oyuncunun ismine özel bir hoş geldin mesajı.
- **Game Grid:** Connect Four oyununun oynandığı 7x6'lık bir oyun alanı.
- **Current Player:** Oyun sırasında hangi oyuncunun disk attığını gösterir.
- **Game History Button:** Oyun bilgilerini kaydeden ve List of Games Screen'e geçişi sağlayan bir buton.
- **Leave Game Button:** Oyundan çıkış yaparak Game Creation Screen'e dönüş sağlar.

### Oyun Akışı

- Oyun, kullanıcı tarafından interaktif bir deneyim sunar.
- Oyuncu ilk diski attıktan sonra, bilgisayar 1 saniye içinde hamle yapar.
- Eğer bir saniye içinde iki kez tıklarsanız, bilgisayar peş peşe hamle yapar.
- Oyun beraber bittiğinde otomatik olarak yeni bir oyun başlar.

## 3. List of Games Screen

Bu sayfa, oyun skorlarının görüntülendiği bir ekran. Özellikleri:

- **Game Score Table:** Son 10 oyunun adını, oyuncu isimlerini, ve kazanan bilgilerini içeren bir tablo.
- **GameCreationScreen Button:** Game Creation Screen'e dönüş sağlayan bir buton.

### Skor Tablosu Güncelleme

- Aynı oyun ismiyle girildiğinde ve listede kayıtlıysa, sadece kazanan ve oyuncu ismi güncellenir.
- Aynı oyun birden fazla listede gösterilmez.

## Nasıl Kullanılır

1. Game Creation Screen'de oyuncu ismini, oyun adını belirtin.
2. Oyuncuların disk renklerini ve arka plan rengini seçin.
3. Oyun ekranında ilk diski atın ve bilgisayarın hamlesini bekleyin.
4. Oyunu beraber bitireniz otomatik olarak yeniden başlar.
5. Eğer önceki ve şimdiki oyun listesini görmek istiyorsanız, Game History kısmından inceleyebilirsiniz.
6. Oyundan çıkmak veya oyun bilgilerini değiştirmek istiyorsanız, Leave Game butonuna basabilirsiniz.
