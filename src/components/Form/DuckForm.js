import React, { useState } from 'react'

import { FeedCol } from '../Footer/FooterElements'
import { FeatureHeader, FeatureRow } from '../MainSection/FeaturesElements'
import { FeedForm, FormSection, Input, Select, FormHeader, Label } from './DuckFormElements'




function DuckForm() {
    const [displaytext, setDisplayTest] = useState(false)

    const handleClick = (val) => {
        console.log('Entry')
        let check = val.target.value;
        if (check == 'others') {
            setDisplayTest(true);
            console.log('called')
        }
        else {
            setDisplayTest(false);
        }
    }

    return (
        <>
            <FormSection id='survey'>
                <FeatureRow>
                    <FormHeader>
                        I welcome sharing your knowledge on ducks
                        </FormHeader>
                </FeatureRow>
                <FeatureRow>
                    <FeedForm method='post' action='#'>
                        <FeatureRow>
                            <FeedCol isValue={false}>
                                <Label for='name' isDisplay={true}>Nick Name</Label>

                            </FeedCol>
                            <FeedCol isValue={true}>
                                <Input type="text" name="name" id="name" isDisplay={true} placeholder="Your Nick name" required />
                            </FeedCol>

                        </FeatureRow>
                        <FeatureRow>
                            <FeedCol isValue={false}>
                                <Label for='park' isDisplay={true}>Park Name</Label>

                            </FeedCol>
                            <FeedCol isValue={true}>
                                <Input type="text" name="park" id="park" isDisplay={true} placeholder="Park Name" required />
                            </FeedCol>

                        </FeatureRow>


                        <FeatureRow>
                            <FeedCol isValue={false}>
                                <Label for='food' isDisplay={true}>Food</Label>

                            </FeedCol>
                            <FeedCol isValue={true}>
                                <Input type="text" name="food" id="food" isDisplay={true} placeholder="What food?" required />
                            </FeedCol>

                        </FeatureRow>
                        <FeatureRow>
                            <FeedCol isValue={false}>
                                <Label for='foodtype' isDisplay={true}>Food Type</Label>

                            </FeedCol>
                            <FeedCol isValue={true}>
                                <Select name="foodtype" id="foodtype" onChange={handleClick}>
                                    <option value="friends" selected>Grain</option>
                                    <option value="search">Fish</option>
                                    <option value="ad"> Plants</option>
                                    <option value="Worms">Worms</option>
                                    <option value="others">others</option>
                                </Select>
                            </FeedCol>

                        </FeatureRow>
                        <FeatureRow>
                            <FeedCol isValue={false}>
                                <Label for='food_type' isDisplay={displaytext}>Enter Food Type</Label>

                            </FeedCol>
                            <FeedCol isValue={true}>
                                <Input type="text" name="food_type_text" isDisplay={displaytext} id="food_type_text" placeholder="Enter Food Type" required />
                            </FeedCol>

                        </FeatureRow>
                        <FeatureRow>
                            <FeedCol isValue={false}>
                                <Label for='time' isDisplay={true}>Time for feeding</Label>

                            </FeedCol>
                            <FeedCol isValue={true}>
                                <Input type="time" name="time" id="time" isDisplay={true} required />
                            </FeedCol>

                        </FeatureRow>
                        <FeatureRow>
                            <FeedCol isValue={false}>
                                <Label for='duck_count' isDisplay={true}>Duck Count</Label>

                            </FeedCol>
                            <FeedCol isValue={true}>
                                <Input type="text" name="duck_count" id="duck_count" isDisplay={true} placeholder="How Many Ducks are feed?" required />
                            </FeedCol>

                        </FeatureRow>
                        <FeatureRow>
                            <FeedCol isValue={false}>
                                <Label for='quantity' isDisplay={true}>Quantity</Label>

                            </FeedCol>
                            <FeedCol isValue={true}>
                                <Input type="text" name="quantity" id="quantity" isDisplay={true} placeholder="Quantity Feed?" required />
                            </FeedCol>

                        </FeatureRow>
                        <FeatureRow>
                            <FeedCol isValue={false}>
                                <Label></Label>

                            </FeedCol>
                            <FeedCol isValue={true}>
                                <Input type="submit" isDisplay={true} value='Submit' />
                            </FeedCol>

                        </FeatureRow>


                    </FeedForm>
                </FeatureRow>
            </FormSection>

        </>
    )
}

export default DuckForm


