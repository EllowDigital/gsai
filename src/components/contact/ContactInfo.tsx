
import Card3D from "../ui/3d-card";

const ContactInfo = () => {
  return (
    <Card3D className="h-full" intensity={15} shadow glare>
      <div className="p-8 h-full">
        <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-gsai-red bg-opacity-20 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-gsai-red"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <a
                href="mailto:ghatakgsai@gmail.com"
                className="text-white hover:text-gsai-red"
              >
                ghatakgsai@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-gsai-red bg-opacity-20 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-gsai-red"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="text-white">+91-639-413-5988 | +91-835-506-2424</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-gsai-red bg-opacity-20 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-gsai-red"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-400">Address</p>
              <p className="text-white">
                Naubasta Pulia, Takrohi Road, Amrai Gaon, Indira Nagar, Lucknow,
                Uttar Pradesh - 226028 (Head Branch)
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-gsai-red bg-opacity-20 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-gsai-red"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-400">Address</p>
              <p className="text-white">
                Fitness & Fun Arena (TCC): Hardasi Kheda, Deva Road, near Baba
                Hospital Road, City Colony, Matiyari, Lucknow, Uttar Pradesh
                (Second Branch)
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold text-white mb-4">
            Opening Hours
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400">Monday - Friday</p>
              <p className="text-white">6:00 AM - 9:00 PM</p>
            </div>
            <div>
              <p className="text-gray-400">Saturday - Sunday</p>
              <p className="text-white">8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </Card3D>
  );
};

export default ContactInfo;
