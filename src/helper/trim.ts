export function trim(str: string, length: number): string {
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
}

// Örnek kullanım:
// const originalTitle = "Bu çok uzun bir başlık örneği";
// const truncatedTitle = trim(originalTitle, 20);
// console.log(truncatedTitle); // "Bu çok uzun bir başlı..."
