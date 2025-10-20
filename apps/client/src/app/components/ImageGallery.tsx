'use client'

import { ProductType } from '@/types';
import Image from 'next/image'
import React, { useState } from 'react'

type ImageGalleryProps = {
    images: string[];
    title: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {

    const [selectedImage, setSelectedImage] = useState(images[0] || "");
    return (
        <div className="w-full lg:w-5/12 flex flex-col gap-4"> {/* Tambah flex-col dan gap */}
            {/* Main image display */}
            <div className="relative w-full aspect-square border rounded-lg overflow-hidden">
                <Image
                    src={selectedImage}
                    fill // Mengisi kontainer
                    alt={title}
                    priority // Prioritaskan gambar ini untuk dimuat lebih cepat
                    style={{ objectFit: 'cover' }} // Agar gambar tidak terdistorsi
                />
            </div>

            {/* Thumbnail images for selection */}
            <div className="flex gap-2 overflow-x-auto pb-2"> {/* overflow-x-auto dipindahkan ke sini */}
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`relative w-24 h-24 cursor-pointer border rounded-md overflow-hidden
                         ${selectedImage === img ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200'}`}
                        onClick={() => setSelectedImage(img)}
                    >
                        <Image
                            src={img}
                            fill // Mengisi kontainer
                            alt={`${title} - thumbnail ${index + 1}`}
                            style={{ objectFit: 'cover' }} 
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageGallery;