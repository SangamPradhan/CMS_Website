import ConfirmationDialog from '@/Components/ConfirmationDialog';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { faEye, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index({ galleries, flash }) {
    // Search state
    const [searchTerm, setSearchTerm] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [deleteUrl, setDeleteUrl] = useState('');
    const { delete: destroy } = useForm();

    const handleDeleteClick = (url) => {
        setDeleteUrl(url);
        setIsDialogOpen(true);
    };

    const handleConfirmDelete = () => {
        setIsDialogOpen(false);
        destroy(deleteUrl);
    };

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        }
        if (flash.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    // Handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter galleries based on the search term
    const filteredGalleries = galleries.filter((gallery) =>
        gallery.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Gallery</h2>}
        >
            <Head title="Gallery" />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <h1 className="font-bold text-2xl">Gallery Posts</h1>
                            <div className="flex justify-end space-x-4 mb-4">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="px-2 py-1 border rounded search-input"
                                    placeholder="Search by Title"
                                />
                                <Link href={route('gallery.create')}>
                                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white focus:outline-none">
                                        Add Gallery
                                    </button>
                                </Link>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="mt-4 min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">ID</th>
                                            <th className="px-4 py-2">Title</th>
                                            <th className="px-4 py-2">Date</th>
                                            <th className="px-4 py-2">Photo</th>
                                            <th className="px-4 py-2">Video</th>
                                            <th className="px-4 py-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredGalleries.map((gallery) => (
                                            <tr key={gallery.id}>
                                                <td className="px-4 py-2 border">{gallery.id}</td>
                                                <td className="px-4 py-2 border">{gallery.title}</td>
                                                <td className="px-4 py-2 border">{gallery.date}</td>
                                                <td className="px-4 py-2 border">
                                                    {gallery.photo ? (
                                                        <img
                                                            src={`/storage/${gallery.photo}`}
                                                            alt={gallery.title}
                                                            className="w-12 h-12 object-cover"
                                                        />
                                                    ) : (
                                                        'No Photo'
                                                    )}
                                                </td>
                                                <td className="px-4 py-2 border">{truncateText(gallery.video || 'No Video', 20)}</td>
                                                <td className="px-4 py-2 border">
                                                    <div className="flex space-x-2">
                                                        <Link
                                                            href={route('gallery.edit', gallery.id)}
                                                            className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded text-blue-600"
                                                        >
                                                            <FontAwesomeIcon icon={faPencilAlt} className="mr-2" />
                                                            Edit
                                                        </Link>
                                                        <Link
                                                            href={route('gallery.show', gallery.id)}
                                                            className="bg-green-100 hover:bg-green-200 px-4 py-2 rounded text-green-600"
                                                        >
                                                            <FontAwesomeIcon icon={faEye} className="mr-2" />
                                                            Preview
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDeleteClick(route('gallery.destroy', gallery.id))}
                                                            className="bg-red-100 hover:bg-red-200 px-4 py-2 rounded text-red-600"
                                                        >
                                                            <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <ConfirmationDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onConfirm={handleConfirmDelete}
            />
        </AuthenticatedLayout>
    );
}
