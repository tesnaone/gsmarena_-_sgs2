/**
 * Fungsi untuk mengetes ketersediaan dan fungsionalitas DOMParser.
 * * DOMParser adalah API browser standar untuk mem-parse string XML atau HTML.
 * Fungsi ini sangat penting untuk parsing HTML/XML di klien (browser).
 * * @returns {boolean} True jika DOMParser tersedia dan berfungsi, false jika tidak.
 */
function isDOMParserSupported() {
    try {
        // 1. Cek keberadaan DOMParser di lingkup global (window/global)
        if (typeof DOMParser === 'undefined') {
            return false;
        }

        // 2. Coba buat instance dan parse string HTML sederhana
        const parser = new DOMParser();
        const doc = parser.parseFromString('<div>Test</div>', 'text/html');

        // 3. Verifikasi hasilnya
        // Hasil yang sukses harus memiliki node body dan elemen yang di-parse
        return !!doc.body && doc.body.children.length > 0 && doc.body.children[0].tagName.toLowerCase() === 'div';

    } catch (e) {
        // Jika terjadi error saat menginstansiasi atau memanggil parseFromString,
        // berarti DOMParser tidak didukung atau tidak diimplementasikan dengan benar.
        return false;
    }
}
