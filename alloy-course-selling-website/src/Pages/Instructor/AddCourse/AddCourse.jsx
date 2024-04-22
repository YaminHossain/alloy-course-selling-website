import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
=======
import { useForm, useFieldArray } from 'react-hook-form';
import Swal from 'sweetalert2';
>>>>>>> 9913c64239ae86dcecb6c47b1d12e25654192d55
const AddCourse = () => {

    const {
        register,
        handleSubmit,
<<<<<<< HEAD
        formState: { errors },
    } = useForm();

=======
        control,
        formState: { errors },
    } = useForm();

    const { fields: featureFields, append, remove } = useFieldArray({
        control,
        name: 'features', // Name of the array field
    });

>>>>>>> 9913c64239ae86dcecb6c47b1d12e25654192d55
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await fetch('http://localhost:8000/formCourses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Form data sent successfully!');
                Swal.fire({
                    title: 'inserted successfully',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            } else {
                console.error('Failed to send form data.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
<<<<<<< HEAD
        <div>
            <h2 className="text-5xl text-center">Add your course</h2>

            {/* add course form */}
            <form className='border border-black px-80 py-20 m-20 grid'
                onSubmit={handleSubmit(onSubmit)}>
                <input className='border border-black mt-3' {...register('firstName')} />
                <input className='border border-black mt-3' {...register('lastName', { required: true })} />
                {errors.lastName && <p>Last name is required.</p>}
                <input className='border border-black mt-3' {...register('age', { pattern: /\d+/ })} />
                {errors.age && <p>Please enter number for age.</p>}
                <input className='btn btn-neutral mt-3' type="submit" />
            </form>

            <div>
                
=======
        <div className=" ">
            <h2 className="text-5xl text-center">Add your course</h2>

            {/* add course form */}
            <div>
                <form className='border border-black mx-auto grid justify-center'
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-center gap-5">
                        <input className='border border-black mt-3 ps-3 py-2 rounded-sm ' {...register('courseBanner', { required: true })} placeholder="Feature" />
                        <input className='border border-black mt-3 ps-3' {...register('courseHours', { required: true })} placeholder="courseHours" />
                        {errors.lastName && <p>courseHours is required.</p>}
                        <input className='border border-black mt-3 ps-3' {...register('coursePrice', { required: true })} placeholder="coursePrice" />
                        {errors.age && <p>courseHours is coursePrice.</p>}
                    </div>


                    {/* ----------- array input for feature--------*/}
                    <div className="py-2">
                        {featureFields.map((field, index) => (
                            <div key={field.id} >
                                <input className='border border-black mt-3'
                                    type="text"
                                    {...register(`features.${index}`)}
                                    // defaultValue={field.feature}
                                    placeholder="Feature"
                                />
                                <button type="button" onClick={() => remove(index)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={() => append()}>
                            Add Feature
                        </button>
                    </div>
                    {/* ----------- */}

                    {/* submit button */}
                    <input className='btn btn-neutral mt-3' type="submit" />
                </form>
            </div>
            <div>
                <img src="" alt="" />
            </div>

            <div>

>>>>>>> 9913c64239ae86dcecb6c47b1d12e25654192d55
                <div className="grid justify-center my-8">
                    <Link to={"/instructor"}><button className="text-center border px-3 py-2 border-zinc-950 bg-green-300 hover:bg-black hover:text-white">back to Instructor Page</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;