export default function Home() {
  const classes = [
    {
      name: "Kelas SI",
      friends: ["Salza", "Reni", "Vinka", "Wini", "Nisa"],
    },
    {
      name: "Kelas KA",
      friends: ["Salza", "Reni", "Vinka", "Wini", "Nisa"],
    },
    {
      name: "Kelas BD",
      friends: ["Salza", "Reni", "Vinka", "Wini", "Nisa"],
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">Daftar Kelas & Kawan Terbaik</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {classes.map((classData, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-xl p-5 flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold text-center mb-4">
              {classData.name}
            </h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {classData.friends.map((friend, idx) => (
                <div key={idx} className="text-center">
                  <img
                    src="/profil.jpeg" // Foto profil yang sama untuk semua
                    alt={friend}
                    className="w-16 h-16 object-cover aspect-square border-[5px] border-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
                  />
                  <p className="text-sm mt-2">{friend}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}