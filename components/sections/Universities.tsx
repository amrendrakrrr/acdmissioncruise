import Image from "next/image";

const universities = [
  {
    name: "Delhi University",
    location: "New Delhi",
    logo: "/universities/du.png",
  },
  {
    name: "Jawaharlal Nehru University",
    location: "New Delhi",
    logo: "/universities/jnu.png",
  },
  {
    name: "Jamia Millia Islamia",
    location: "New Delhi",
    logo: "/universities/jamia.png",
  },
  {
    name: "Banaras Hindu University",
    location: "Varanasi",
    logo: "/universities/bhu.png",
  },
  {
    name: "Aligarh Muslim University",
    location: "Aligarh",
    logo: "/universities/amu.png",
  },
  {
    name: "Lovely Professional University",
    location: "Punjab",
    logo: "/universities/lpu.png",
  },
];

export default function Universities() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Top Universities
          </h2>

          <p className="text-gray-500 mt-4">
            Get admission guidance for India's leading universities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {universities.map((uni) => (
            <div
              key={uni.name}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <div className="flex justify-center pt-8">
                <Image
                  src={uni.logo}
                  alt={uni.name}
                  width={90}
                  height={90}
                />
              </div>

              <div className="p-8 text-center">

                <h3 className="text-2xl font-bold">
                  {uni.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {uni.location}
                </p>

                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition">
                  Apply Now
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}