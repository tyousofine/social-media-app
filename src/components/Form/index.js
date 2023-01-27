import React from 'react'
import { useState } from 'react'

export default function Form() {
    const [title, setTitle] = useState('');;
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [promote, setPromote] = useState(true);
    const [status, setStatus] = useState('');
    const [picture, setPicture] = useState('');
    const [errorMessages, setErrorMessages] = useState('');


    const handleFormSubmit = (event) => {
        event.preventDefault();

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

        if (validate.length > 0) {
            // Invalid data
            console.log("Validate: ", validate)
            setErrorMessages(validate);
            console.log(errorMessages);
        } else {
            // Valid data
            console.log("Title: ", title)
            console.log("Desc: ", description)
            console.log("Category: ", category)
            console.log("form submited!")
            console.log("status: ", status)
            setErrorMessages([])
        }
    }

    const categories = [
        { id: 'edu', text: 'Education' },
        { id: 'ent', text: 'Entertainment' },
        { id: 'gam', text: 'Gaming' },
        { id: 'nws', text: 'News' },
        { id: 'oth', text: 'Other' },

    ]

    const statuses = [
        { id: 'd', text: 'Draft' },
        { id: 'p', text: 'Published' },
        { id: 'a', text: 'Archived' },
    ]

    const handlePictureSelection = (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (event) => {
            setPicture(event.target.result)
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <hr />
            {/* Conditionally display the error messages */}
            {errorMessages.length > 0 && (
                <div>
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
            <div>
                <label>
                    Promote:
                    <input type="checkbox"
                        checked={promote}
                        onChange={(e) => setPromote(e.target.checked)} />
                </label>
            </div>

            {/* <div>
                Status:
                <label>
                    Draft
                    <input type="radio"
                        value='draft'
                        checked={status === 'draft'}
                        onChange={handleRadioChange} />
                </label>
                <label>
                    Publish
                    <input type="radio"
                        value='published'
                        checked={status === 'published'}
                        onChange={handleRadioChange} />
                </label>
                <label>
                    Archive
                    <input type="radio"
                        value='archive'
                        checked={status === 'archive'}
                        onChange={handleRadioChange} />
                </label>
            </div> */}

            {/*  Status Field (Draft, Publish, Archive) */}
            <div>
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
                    />
                    {picture !== '' && <img
                        src={picture}
                        alt="Preview"
                        width={100} />
                    }
                </label>
            </fieldset>
            <button>Send</button>
        </form>
    )
}

