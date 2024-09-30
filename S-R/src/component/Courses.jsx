// import React from 'react';

function Courses() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 shadow-md rounded-lg overflow-hidden">
        <div className="bg-white p-4">
          <img src="https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/ec5be16b046b62a2a860b67f9dc55b86.png" alt="Picture 1" className="w-full h-48 object-cover rounded-t" />
          <div className="p-4">
            <h5 className="text-lg font-bold">Picture 1</h5>
          </div>
        </div>
        <div className="bg-white p-4">
          <img src="pic2.jpg" alt="Picture 2" className="w-full h-48 object-cover rounded-t" />
          <div className="p-4">
            <h5 className="text-lg font-bold">Picture 2</h5>
          </div>
        </div>
        <div className="bg-white p-4">
          <img src="pic3.jpg" alt="Picture 3" className="w-full h-48 object-cover rounded-t" />
          <div className="p-4">
            <h5 className="text-lg font-bold">Picture 3</h5>
          </div>
        </div>
        <div className="bg-white p-4">
          <img src="pic4.jpg" alt="Picture 4" className="w-full h-48 object-cover rounded-t" />
          <div className="p-4">
            <h5 className="text-lg font-bold">Picture 4</h5>
          </div>
        </div>
        <div className="bg-white p-4">
          <img src="pic5.jpg" alt="Picture 5" className="w-full h-48 object-cover rounded-t" />
          <div className="p-4">
            <h5 className="text-lg font-bold">Picture 5</h5>
          </div>
        </div>
        <div className="bg-white p-4">
          <img src="pic6.jpg" alt="Picture 6" className="w-full h-48 object-cover rounded-t" />
          <div className="p-4">
            <h5 className="text-lg font-bold">Picture 6</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;