import { NEWS_DATA, NEWS_TAGS, TABLES_DATA } from "@/constants"
import NewsCard from "./NewsCard"
import NewsContent from "./NewsContent"
import Quotes from "./Quotes"
import Table from "./Table"
import NewsTag from "./NewsTag"
import NewsAuhor from "./NewsAuhor"

const NewsMain = () => {
    return (
        <article className="flex flex-col gap-6">
            <NewsContent firstContent="
        <p>Kesadaran akan investasi utamanya bagi generasi muda semakin meningkat. Instrumen investasi yang ramai diperbincangkan selama pandemi adalah saham dan Bitcoin.</P>
        <br />
        <p>Keduanya seringkali dibandingkan, terutama dari segi keuntungan. Namun manakah investasi yang terbukti memiliki profit lebih besar dalam rentang waktu Januari-Juli 2021?</p>
        <br />
        <p>Kamu bisa mendapatkan jawabannya di artikel berikut ini. Sebelum kita mengetahui keuntungan mana yang lebih besar, ada baiknya kamu mengetahui bahwa meski sering disamakan, saham dan Bitcoin adalah dua investasi yang berbeda, apa saja perbedaannya? Berikut ulasannya Bitcoin vs Saham.</p>
        <br />
        <p>Paling tidak ada tiga hal yang menjadi pembeda utama Bitcoin vs saham. Di antaranya adalah proses kepemilikan, pasokan dan kapasitas menghasilkan untung.</p>
        " />
            <NewsContent
                heading="Proses Kepemilikan"
                firstContent="
            <ol style='list-style-type: decimal; padding-left: 20px'>
            <li>Dalam proses kepemilikan saham cenderung lebih rumit, karena untuk membeli saham kamu harus membuka rekening saham di perusahaan sekuritas yang terpercaya dan sudah terdaftar di OJK.<ol style='list-style-type: lower-alpha; padding-left: 20px'>
                    <li>Proses pendaftaran ini pun harus dilakukan secara langsung ke &nbsp;sekuritas, dengan membawa berkas-berkas yang cukup banyak seperti kartu identitas, buku tabungan, &nbsp;data ahli waris, dan lainnya. Prosesnya pun &nbsp;belum tentu selesai dalam waktu sehari. Ketika kamu sudah membuka rekening saham baru bisa membeli saham.</li>
                </ol>
            </li>
            <li>Sedangkan kepemilikan Bitcoin lebih sederhana, kamu tinggal pilih bursa jual beli Bitcoin yang sudah&nbsp;<ol style='list-style-type: lower-alpha; padding-left: 20px'>
                    <li>diawasi oleh Bappebti</li>
                    <li>kemudian daftar</li>
                    <li>verifikasi dengan kartu identitas</li>
                    <li>foto dan lainnya<ol style='list-style-type: lower-roman; padding-left: 20px'>
                            <li>kemudian akan diproses paling lama 1&times;24 jam.</li>
                        </ol>
                    </li>
                </ol>
            </li>
            <li>Sesudah itu kamu tinggal deposit, dan langsung bisa beli Bitcoin, proses ini pun bisa dilakukan di mana saja secara online tanpa harus mengunjungi kantor bursa crypto.</li>
        </ol>
        " />
            <NewsContent
                heading="Pasokan"
                firstContent="
                <ul style='list-style-type: disc; padding-left: 20px;'>
                    <li>Bitcoin hanya berjumlah 21 juta</li>
                    <li>jika seluruh koin ini sudah didistribusikan maka tidak akan ada lagi Bitcoin yang tercipta.&nbsp;</li>
                    <li>Karena hal tersebut maka Bitcoin menjadi langka, karena jumlah permintaan akan lebih besar dari penawaran.</li>
            </ul>"
                secondContent="
                <p>Berbeda dengan Bitcoin, saham tidak mengenal istilah pasokan yang terbatas, karena akan selalu ada perusahaan baru yang mendaftar di bursa saham dan melakukan <span style='color: #2B64CE;'>penawaran saham ke publik</span>. Ini tidak akan menjadikannya langka, karena pilihan saham sangat beragam, mau yang tinggi, menengah, hingga saham kecil atau yg biasa disebut saham gorengan.</p>
                "
            >
                <>
                    <Quotes text="Dengan mekanisme tersebut di masa depan, harga Bitcoin akan akan melambung tinggi dan bagi para investor yang memulai investasi Bitcoin sejak dini sangat dimungkinkan untuk mendapatkan keuntungan besar dari Bitcoin yang sudah mereka miliki sejak harganya belum terlalu tinggi. Bitcoin sendiri tercatat pernah menyentuh harga tertingginya pada  933 juta Rupiah pada April 2021." author="John Doe" />
                    <NewsCard title="Mengenal Whale Bitcoin yang Bikin Market Gonjang-Ganjing" author="Coinvestasi.com" thumbnailUrl="/whale-bitcoin.jpg" />
                </>
            </NewsContent>
            <NewsContent
                heading="Kapasitas untuk Menghasilkan Untung"
                firstContent="
                <p style='margin-bottom: 16px;'>Berinvestasi di pasar saham membutuhkan banyak kesabaran karena menghasilkan keuntungan dari investasi ini membutuhkan waktu yang tidak sebentar bahkan hingga bertahun-tahun.</p>
                <p>Sedangkan Bitcoin terkenal dengan sifatnya yang volatil dan fluktuatif, sehingga bisa mendapatkan keuntungan dengan sangat cepat karena harganya berubah dengan cepat pula.</p>
                "
                secondContent="
                <p>Meski begitu perlu diingat kapasitas mendapatkan untung dengan cepat biasanya diimbangi dengan risiko yang tinggi pula, karena itu kamu perlu bijak melakukan manajemen risiko dalam melakukan investasi.</p>
                "
            >
                <>
                    <NewsCard title="6 Alasan Kenapa Kamu Harus Investasi Bitcoin Di 2021" author="Coinvestasi.com" thumbnailUrl="/reason-bitcoin.jpg" />
                </>
            </NewsContent>
            <NewsContent
                heading="Komparasi Profit BTC vs Top 5 Saham Indonesia"
                secondContent="
                <p>Setelah mengetahui perbedaan saham dan Bitcoin secara umum , sekarang mari kita lihat perbandingan harga tertinggi dari Bitcoin vs saham. Pada artikel kali ini, kami menggunakan data harga tertinggi yang diperoleh Bitcoin dan saham di periode 31 Desember.</P>
                <br />
                <p>Saham yang digunakan dalam perbandingan ini adalah beberapa saham yang masuk kategori top tier di Indonesia. Saham itu adalah saham BCA, Unilever, BRI, Telkom, Antam, dan Indofood.</p>
                <br />
                <p>Di model ini kamu adalah investor yang membeli investasi saham sejumlah 10 lot (1000 lembar) atau Bitcoin pada 2016 dan menjualnya pada 2020.  Berikut ini adalah hasil dan keuntungan yang kamu dapatkan.</p>
                <br />
                <p>Berdasarkan tabel tersebut dapat dilihat bahwa Bitcoin memiliki keuntungan yang sangat mengesankan, jika kamu membelinya pada 2016 dan menjualnya pada 2020 maka kamu sudah profit hingga 3.000 persen. Hal ini justru berbeda jika kamu investasi di saham Unilever, Telkom hingga Indofood yang malah rugi ketika disimpan selama empat tahun. Dari hasil ini menunjukan jika soal keuntungan Bitcoin jauh lebih unggul.</p>
                <br />
                <p>Kemudian jika kamu baru mengenal Bitcoin tahun ini dan membelinya di awal tahun, kamu juga mendapatkan profit yang cukup lumayan. Sebab dalam Januari -Juli Bitcoin telah mengalami keuntungan hingga 41.12%. Walau tahun ini harga Bitcoin sempat mengalami penurunan hingga setengah harga dari harga tertingginya, pada kenyataannya aset ini tetap mengalami pertumbuhan yang cukup baik.</p>
                <br />
                <p>Ingin tahu perkembangan harga Bitcoin dan harga aset crypto lainnya? Kamu bisa memperolehnya di situs Coinvestasi.com. </p>
                "
            >
                <>
                    <Table {...TABLES_DATA}></Table>
                </>
            </NewsContent>
            <div className="w-full h-[1px] bg-[#F2F5F9]" />
            <NewsTag tags={NEWS_TAGS} />
            <div className="w-full h-[1px] bg-[#F2F5F9]" />
            <div className="hidden md:flex">
                <NewsAuhor
                    name={NEWS_DATA.author}
                    bio={NEWS_DATA.authorBio}
                    avatarUrl={NEWS_DATA.auhorAvatar}
                    linkedinUrl={NEWS_DATA.authorSocials.linkedinUrl}
                    twitterUrl={NEWS_DATA.authorSocials.twitterUrl}
                    emailUrl={NEWS_DATA.authorSocials.emailUrl}
                />
            </div>
        </article>
    )
}

export default NewsMain