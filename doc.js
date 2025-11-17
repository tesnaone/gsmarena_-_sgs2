function isDocumentAvailable() {
    try {
        // Cek apakah 'document' ada dan merupakan instance dari Document.
        // Pengecekan 'document.nodeType' memastikan itu adalah objek DOM yang valid.
        if (typeof document === 'undefined' || document === null || document.nodeType !== 9) {
            return false;
        }
        return true;
    } catch (e) {
        // Tangani kasus di mana akses ke 'document' memicu SecurityError atau lainnya.
        return false;
    }
}
