export default function Header() {
    return (
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
            <div className="text-4xl font-bold text-blue-700">BeritaKu</div>
            <div className="flex items-center space-x-4 text-gray-600 text-xl">
                <span className="cursor-pointer">&#128269;</span> {/* 🔍 */}
                <span className="cursor-pointer">&#9776;</span>   {/* ☰ */}
            </div>
        </header>
    );
}
