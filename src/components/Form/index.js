import React from 'react'
import { useState, useRef } from 'react'
import { categories } from '../../includes/variables';
import { statuses } from '../../includes/variables';
import './styles.scss'
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postSlice';
import * as database from './../../database/index';


export default function Form() {
    const [title, setTitle] = useState('');;
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [promote, setPromote] = useState(true);
    const [status, setStatus] = useState('');
    const [picture, setPicture] = useState('');
    const [errorMessages, setErrorMessages] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const onAddPost = {};

    const dispatch = useDispatch();
    const inputFile = useRef();


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Hide success message
        setShowSuccess(false);

        // validate the data
        const validate = [];
        if (title.length < 5) {
            validate.push("Title too short")
        }
        if (description === "") {
            validate.push("The description is required")
        }
        if (category === '') {
            validate.push("Please select category")
        }
        if (status === '') {
            validate.push("Please select a status")
        }
        if (picture === '') {
            validate.push("Please provide a picture")
        }

        setErrorMessages(validate);

        if (validate.length === 0) {
            setIsSaving(true);

            // upload picture
            const file = inputFile.current.files[0];
            const pictureURL = await database.uploadPicture(file);
            // if (pictureURL) {
            // Valid data
            // onAddPost(title, description, category, promote, status, picture)

            // payload
            const data = { title, description, category, promote, status, picture: pictureURL, likes: 0, dislikes: 0 }

            const savedId = await database.save(data);
            if (savedId) {
                data.id = savedId;
                dispatch(addPost(data));

                // display submission sucess message
                setShowSuccess(true)

                // clear the form
                setTitle('');
                setDescription('');
                setCategory('');
                setPromote(true);
                setStatus('');
                setPicture('');
                if (inputFile.current) {
                    inputFile.current.value = '';

                }
            }
            else {
                setErrorMessages(['Failed to save data.'])
            }
            // }
            // else {
            //     setErrorMessages(['Failed to upload picture'])
            // }


            // hide the saving message
            setIsSaving(false);
        }
    }

    if (isSaving) {
        return (
            <div>Saving....</div>

        )
    }

    const handlePictureSelection = (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (event) => {
            setPicture(event.target.result)
        }
    }

    return (
        <form
            className='form-component'
            onSubmit={handleFormSubmit}>

            {
                showSuccess && (
                    <div className='success-message'>
                        Form succesfully submitted!
                    </div>
                )}


            {/* Conditionally display the error messages */}
            {errorMessages.length > 0 && (
                <div className='form-validate'>
                    Invalid data:
                    <ul>{errorMessages.map((e, index) => (
                        <li key={index}>{e}</li>

                    ))}
                    </ul>
                </div>
            )
            }

            {/* Title Field */}
            <div>
                <label>
                    Title:
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        maxLength='50'
                        // or maxLength={5}
                        placeholder="Enter Title"
                        required={true}
                    />
                </label>
            </div>

            {/*  Description Field */}

            {/* <textarea>My post description</textarea> */}
            <div>
                <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="My post"
                        maxLength={500}
                    />
                </label>
            </div>

            {/* Category  */}
            <div>
                <label>
                    Label:
                    <select value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value=""> - Select -</option>
                        {categories.map((item) => (
                            <option key={item.id} value={item.id}>{item.text}</option>
                        ))}
                    </select>
                </label>
            </div>

            {/* Promot Field */}
            <div className='promote-field'>
                <label>
                    <input type="checkbox"
                        checked={promote}
                        onChange={(e) => setPromote(e.target.checked)} />
                    Promote
                </label>
            </div>

            {/*  Status Field (Draft, Publish, Archive) */}
            <div className='status-field'>
                Status:
                {statuses.map((item) => (
                    <label key={item.id}>
                        <input
                            type='radio'
                            value={item.id}
                            checked={status === item.id}
                            onChange={(e) => setStatus(e.target.value)} />
                        {item.text}
                    </label>
                ))}
            </div>
            {/* picture field */}
            <fieldset>
                <legend>Picture: </legend>
                <label>
                    Select an image:
                    <input
                        type="file"
                        accept='image/*'
                        onChange={handlePictureSelection}
                        ref={inputFile}
                    />
                </label>
                {picture !== '' && <img
                    src={picture}
                    alt="Preview"
                    width={100} />
                }
            </fieldset>
            <button>Send</button>
        </form>
    )
}

