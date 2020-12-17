import React, { useState } from 'react'

import { FeedCol } from '../Footer/FooterElements'
import { FeatureHeader, FeatureRow } from '../MainSection/FeaturesElements'
import { FeedForm, FormSection, Input, Select, FormHeader, Label } from './DuckFormElements'
import countryList from 'react-select-country-list'
import { useEffect } from 'react'




function DuckForm() {
    const [displaytext, setDisplayTest] = useState(false)
    const [displayCountry, setDisplayCountry] = useState(countryList().getLabels())
    const [foodTypes, updateFoodTypes] = useState(['Grains', 'Fish', 'Plants', 'Worms'])


    const countryOptions = displayCountry.map((x) => { return <option key={x} value={x}>{x}</option> });    
    

    useEffect( function upFood(){
        async function fetchFoodType(){
            const foodTypeResponse = await fetch('http://localhost:8080/survey/foodTypes', {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json());
        if (foodTypeResponse['status'] == 200) {

            var listVal=[];
            // console.log(foodTypeResponse.json().hits);
            var resData = foodTypeResponse['data'];
            console.log(resData);
            // var listFoodType = []
            resData.forEach(element => {
                listVal.push(element.name)

            });
            console.log(listVal);
            console.log(foodTypes);
            var currentFoodTypes=[...foodTypes];
            currentFoodTypes= currentFoodTypes.concat(listVal);
            currentFoodTypes.push('others')
            updateFoodTypes(currentFoodTypes);

        }

        }
        fetchFoodType();

    },[]);
    
    const foodTypeOptions = foodTypes.map((x) => { return <option key={x} value={x}>{x}</option> });

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


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Entered');

        console.log(e.target);
        const data = new FormData(e.target);
        var body = {};
        for (var [key, value] of data.entries()) {
            body[key] = value;
        }
        body['foodDescription'] = body['food']
        if (body['foodType'] == 'others') {
            console.log('b');
            if (body['food_type_text'].trim().length > 0) {
                body['foodType'] = body['food_type_text'];
            }
        }
        

        console.log(body);

        const response = await fetch('http://localhost:8080/survey/participate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (response['status'] == 200) {
            alert('Thanks for Submitting');
            // e.target.reset();
            console.log(response)
            console.log(foodTypes)
 
        }
        else {
            alert('server Error try again Later and check logs');
        }
    };

    return (
        <>
            <FormSection id='survey'>
                <FeatureRow>
                    <FormHeader>
                        I welcome sharing your knowledge on ducks
                        </FormHeader>
                </FeatureRow>
                <FeatureRow>
                    <FeedForm method='post' action='#' onSubmit={handleSubmit}>
                        <FeatureRow>
                            <FeedCol isValue={false}>
                                <Label for='name' isDisplay={true}>Nick Name</Label>

                            </FeedCol>
                            <FeedCol isValue={true}>
                                <Input type="text" name="nickname" id="nickname" isDisplay={true} placeholder="Your Nick name" required />
                            </FeedCol>

                        </FeatureRow>
                        <FeatureRow>
                            <FeedCol isValue={false}>
                                <Label for='park' isDisplay={true}>Place Name</Label>

                            </FeedCol>
                            <FeedCol isValue={true}>
                                <Input type="text" name="place" id="place" isDisplay={true} placeholder="Place Name" required />
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
                                <Select name="foodType" id="foodType" onChange={handleClick}>
                                {foodTypeOptions}
                                </Select>
                            </FeedCol>

                        </FeatureRow>
                        <FeatureRow>
                            <FeedCol isValue={false}>
                                <Label for='food_type' isDisplay={displaytext}>Enter Food Type</Label>

                            </FeedCol>
                            <FeedCol isValue={true}>
                                <Input type="text" name="food_type_text" isDisplay={displaytext} id="food_type_text" placeholder="Enter Food Type" />
                            </FeedCol>

                        </FeatureRow>
                        <FeatureRow>
                            <FeedCol isValue={false}>
                                <Label for='country' isDisplay={true}>Country</Label>

                            </FeedCol>
                            <FeedCol isValue={true}>
                                <Select name="country" id="country" >
                                    {countryOptions}
                                </Select>
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
                                <Input type="number" name="duckCount" id="duckCount" isDisplay={true} placeholder="How Many Ducks are feed?" required />
                            </FeedCol>

                        </FeatureRow>
                        <FeatureRow>
                            <FeedCol isValue={false}>
                                <Label for='quantity' isDisplay={true}>Quantity</Label>

                            </FeedCol>
                            <FeedCol isValue={true}>
                                <Input type="number" name="feedAmount" id="feedAmount" isDisplay={true} placeholder="Quantity Feed?" required />
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


