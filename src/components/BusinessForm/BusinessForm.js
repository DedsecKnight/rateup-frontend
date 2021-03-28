import React, { Fragment, useState } from 'react'
import './BusinessForm.css'
import { Button, FormControl } from '@material-ui/core'
import { FormRadio, FormCheckbox, FormRadioMultiple } from '../FormItem/FormItem'
import { initialState } from './FormData'
import EstimateRating from '../../features/EstimateRating'
// import { stateList } from './FormData'

const BusinessForm = () => {

    const [formData, setFormData] = useState(initialState);

    const update = (e) => {
        const val = (e.target.value === 'true' ? true : e.target.value === 'false' ? false : parseInt(e.target.value));
        if (initialState[e.target.name] instanceof Array) {
            setFormData({
                ...formData,
                [e.target.name]: [val]
            })
        }
        else setFormData({
            ...formData, 
            [e.target.name]: val
        });
    }

    const handleClick = (e) => {
        const val = (e.target.value === 'true' ? true : e.target.value === 'false' ? false : parseInt(e.target.value));
        if (formData[e.target.name] === val || formData[e.target.name][0] === val) {
            setFormData({
                ...formData,
                [e.target.name]: initialState[e.target.name]
            })
        }
    }

    const updateBestNight = (e) => {
        let currData = formData.BestNights;

        if (e.target.name === 'monday') currData[0] = !currData[0];
        if (e.target.name === 'tuesday') currData[1] = !currData[1];
        if (e.target.name === 'wednesday') currData[2] = !currData[2];
        if (e.target.name === 'thursday') currData[3] = !currData[3];
        if (e.target.name === 'friday') currData[4] = !currData[4];
        if (e.target.name === 'saturday') currData[5] = !currData[5];
        if (e.target.name === 'sunday') currData[6] = !currData[6];

        setFormData({
            ...formData,
            BestNights: currData
        })
    }

    const updateBusinessParking = (e) => {
        let currData = formData.BusinessParking;
        
        if (e.target.name === 'garage') currData[0] = !currData[0];
        if (e.target.name === 'street') currData[1] = !currData[1];
        if (e.target.name === 'validated') currData[2] = !currData[2];
        if (e.target.name === 'lot') currData[3] = !currData[3];
        if (e.target.name === 'valet') currData[4] = !currData[4];

        setFormData({
            ...formData,
            BusinessParking: currData
        })
    }

    const updateDietaryRestrictions = (e) => {
        let currData = formData.DietaryRestrictions;

        if (e.target.name === 'dairy_free') currData[0] = !currData[0];
        if (e.target.name === 'gluten_free') currData[1] = !currData[1];
        if (e.target.name === 'vegetarian') currData[2] = !currData[2];
        if (e.target.name === 'vegan') currData[3] = !currData[3];
        
        setFormData({
            ...formData,
            DietaryRestrictions: currData
        })
    }

    const updateGoodForMeal = (e) => {
        let currData = formData.GoodForMeal;
        
        if (e.target.name === 'breakfast') currData[0] = !currData[0];
        if (e.target.name === 'brunch') currData[1] = !currData[1];
        if (e.target.name === 'lunch') currData[2] = !currData[2];
        if (e.target.name === 'dinner') currData[3] = !currData[3];
        if (e.target.name === 'dessert') currData[4] = !currData[4];
        if (e.target.name === 'latenight') currData[5] = !currData[5];

        setFormData({
            ...formData,
            GoodForMeal: currData
        })
    }

    const updateAmbience = (e) => {
        let currData = formData.Ambience;

        if (e.target.name === 'romantic') currData[0] = !currData[0];
        if (e.target.name === 'intimate') currData[1] = !currData[1];
        if (e.target.name === 'classy') currData[2] = !currData[2];
        if (e.target.name === 'hipster') currData[3] = !currData[3];
        if (e.target.name === 'divey') currData[4] = !currData[4];
        if (e.target.name === 'touristy') currData[5] = !currData[5];
        if (e.target.name === 'trendy') currData[6] = !currData[6];
        if (e.target.name === 'upscale') currData[7] = !currData[7];
        if (e.target.name === 'casual') currData[8] = !currData[8];

        setFormData({
            ...formData,
            Ambience: currData
        })
    }

    const updateMusic = (e) => {
        let currData = formData.Music;

        if (e.target.name === 'dj') currData[0] = !currData[0];
        if (e.target.name === 'background_music') currData[1] = !currData[1];
        if (e.target.name === 'video') currData[4] = !currData[4];
        if (e.target.name === 'jukebox') currData[2] = !currData[2];
        if (e.target.name === 'live') currData[3] = !currData[3];
        if (e.target.name === 'karaoke') currData[5] = !currData[5];
        
        setFormData({
            ...formData,
            Music: currData
        })
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const {   
        AgesAllowed,
        Alcohol,
        BusinessAcceptsBitcoin,
        BusinessAcceptsCreditCards,
        DogsAllowed,
        DriveThru,
        HasTV,
        Open24Hours,
        OutdoorSeating,
        Smoking,
        Ambience,
        CoatCheck,
        BYOBCorkage,
        GoodForKids,
        RestaurantsTableService,
        RestaurantsReservations,
        BikeParking,
        Caters,
        GoodForDancing,
        HappyHour,
        RestaurantsCounterService,
        RestaurantsDelivery,
        RestaurantsGoodForGroups,
        RestaurantsTakeOut,
        WheelchairAccessible,
        BestNights,
        BusinessParking,
        DietaryRestrictions,
        WiFi,
        Music,
        NoiseLevel,
        RestaurantsAttire,
        GoodForMeal
     } = formData;

     const ambienceData = [
        { name: "romantic", value: Ambience[0], label: "Romantic"},
        { name: "intimate", value: Ambience[1], label: "Intimate"},
        { name: "classy", value: Ambience[2], label: "Classy"},
        { name: "hipster", value: Ambience[3], label: "Hipster"},
        { name: "divey", value: Ambience[4], label: "Divey"},
        { name: "touristy", value: Ambience[5], label: "Touristy"},
        { name: "trendy", value: Ambience[6], label: "Trendy"},
        { name: "upscale", value: Ambience[7], label: "Upscale"},
        { name: "casual", value: Ambience[8], label: "Casual"},
    ];

    const bestNightData = [
        {name: "monday", value: BestNights[0], label: "Monday"},
        {name: "tuesday", value: BestNights[1], label: "Tuesday"},
        {name: "wednesday", value: BestNights[2], label: "Wednesday"},
        {name: "thursday", value: BestNights[3], label: "Thursday"},
        {name: "friday", value: BestNights[4], label: "Friday"},
        {name: "saturday", value: BestNights[5], label: "Saturday"},
        {name: "sunday", value: BestNights[6], label: "Sunday"}
    ]

    const businessParkingData = [
        {name: "garage", value: BusinessParking[0], label: "Garage"},
        {name: "street", value: BusinessParking[1], label: "Street"},
        {name: "validated", value: BusinessParking[2], label: "Validated"},
        {name: "lot", value: BusinessParking[3], label: "Lot"},
        {name: "valet", value: BusinessParking[4], label: "Valet"}
    ]

    const dietData = [
        {name: "dairy_free", value: DietaryRestrictions[0], label: "Dairy-Free"},
        {name: "gluten_free", value: DietaryRestrictions[1], label: "Gluten-Free"},
        {name: "vegetarian", value: DietaryRestrictions[2], label: "Vegetarian"},
        {name: "vegan", value: DietaryRestrictions[3], label: "Vegan"},
        
    ]

    const WiFiData = [
        { label: 'No', value: 1 },
        { label: 'Free', value: 2 },
        { label: 'Paid', value: 4 }
    ]

    const musicData = [
        {name: "dj", value: Music[0], label: "DJ"},
        {name: "background_music", value: Music[1], label: "Background Music"},
        {name: "jukebox", value: Music[2], label: "Jukebox"},
        {name: "live", value: Music[3], label: "Live"},
        {name: "video", value: Music[4], label: "Video"},
        {name: "karaoke", value: Music[5], label: "Karaoke"}
    ]

    const noiseData = [
        {value: 1, label: "Quiet"},
        {value: 2, label: "Average"},
        {value: 4, label: "Loud"},
        {value: 8, label: "Very Loud"}
    ]

    const attireData = [
        { label: 'Casual', value: 1 },
        { label: 'Dressy', value: 2 },
        { label: 'Formal', value: 4 }
    ]

    const GoodForMealData = [
        {name: "dessert", value: GoodForMeal[4], label: "Dessert"},
        {name: "latenight", value: GoodForMeal[5], label: "Late Night"},
        {name: "lunch", value: GoodForMeal[2], label: "Lunch"},
        {name: "dinner", value: GoodForMeal[3], label: "Dinner"},
        {name: "brunch", value: GoodForMeal[1], label: "Brunch"},
        {name: "breakfast", value: GoodForMeal[0], label: "Breakfast"},
    ]

    const ageData = [
        { label: '18+', value: 1 },
        { label: '19+', value: 2 },
        { label: '21+', value: 4 },
        { label: 'All Ages', value: 8 }
    ]

    const alcoholData = [
        { label: 'Full Bar', value: 1 },
        { label: 'Beer and Wine', value: 2 }
    ]

    const corkageData = [
        { value: 2, label: 'Corkage fee is charged' },
        { value: 4, label: 'No corkage fee is charged' },
        { value: 1, label: 'We do not allow BYOB' },
    ]
    return (
        <Fragment>
            <form className="business-form">
                {/* <FormSelect 
                    name="state"
                    value={state}
                    fieldName="State"
                    onChange={update}
                    options={stateList}
                /> */}

                <FormRadioMultiple 
                    name="AgesAllowed" 
                    fieldName="What is the minimum age required to use your business?"
                    onChange={update}
                    value={AgesAllowed}
                    options={ageData}
                    onClick={handleClick} />

                <FormRadioMultiple 
                    name="Alcohol" 
                    fieldName="What kind of alcohol service does your business offer?"
                    onChange={update}
                    value={Alcohol}
                    options={alcoholData}
                    onClick={handleClick} />

                <FormRadio 
                    name="BusinessAcceptsBitcoin" 
                    value={BusinessAcceptsBitcoin} 
                    fieldName="Does your business accept bitcoin? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormCheckbox 
                    description="Choose all music services that your business offer" 
                    data={musicData} updateCheck={updateMusic} 
                />

                <FormRadio 
                    name="BusinessAcceptsCreditCards" 
                    value={BusinessAcceptsCreditCards} 
                    fieldName="Does your business accept credit card? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormRadio 
                    name="DogsAllowed" 
                    value={DogsAllowed} 
                    fieldName="Does your business allow dogs inside? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormRadio 
                    name="DriveThru" 
                    value={DriveThru} 
                    fieldName="Does your business provide drive-thru service? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormRadio 
                    name="HasTV" 
                    value={HasTV} 
                    fieldName="Does your business have TV? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormRadioMultiple 
                    name="NoiseLevel" 
                    fieldName="Choose what best describe your business' noise level"
                    onChange={update}
                    value={NoiseLevel}
                    options={noiseData}
                    onClick={handleClick} />

                <FormRadio 
                    name="Open24Hours" 
                    value={Open24Hours} 
                    fieldName="Does your business open for 24 hours? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormRadio 
                    name="OutdoorSeating" 
                    value={OutdoorSeating} 
                    fieldName="Does your business provide outdoor seating? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormRadio 
                    name="Smoking"
                    value={Smoking}
                    fieldName="Does your business allow smoking?"
                    onChange={update}
                    onClick={handleClick} />
                
                
                <FormCheckbox 
                    description="Choose all that best describe your business' ambience" 
                    data={ambienceData} updateCheck={updateAmbience} 
                />

                <FormRadio 
                    name="CoatCheck" 
                    value={CoatCheck} 
                    fieldName="Does your business provide coat check? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormRadioMultiple 
                    name="BYOBCorkage" 
                    fieldName="Choose what best describe your business' BYOB policy"
                    onChange={update}
                    value={BYOBCorkage}
                    options={corkageData} 
                    onClick={handleClick}/>

                <FormRadio 
                    name="GoodForKids" 
                    value={GoodForKids} 
                    fieldName="Is your business good for kids? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormRadio 
                    name="RestaurantsTableService" 
                    value={RestaurantsTableService} 
                    fieldName="Does your business provide table services? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormCheckbox 
                    description="Good for Meal choice" 
                    data={GoodForMealData} updateCheck={updateGoodForMeal} 
                />

                <FormRadio 
                    name="RestaurantsReservations" 
                    value={RestaurantsReservations} 
                    fieldName="Does your business support reservations? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormRadio 
                    name="BikeParking" 
                    value={BikeParking} 
                    fieldName="Does your business support bike parking? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormRadioMultiple 
                    name="RestaurantsAttire" 
                    fieldName="Choose what best describe your business' attire"
                    onChange={update}
                    value={RestaurantsAttire}
                    options={attireData}
                    onClick={handleClick} />

                <FormCheckbox 
                    description="Choose all dietary restrictions that your business offer" 
                    data={dietData} updateCheck={updateDietaryRestrictions} 
                />

                <FormRadio 
                    name="Caters" 
                    value={Caters} 
                    fieldName="Does your business provide caters? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormRadio 
                    name="GoodForDancing" 
                    value={GoodForDancing} 
                    fieldName="Is your business good for dancing? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormRadio 
                    name="HappyHour" 
                    value={HappyHour} 
                    fieldName="Does your business have happy hour? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormCheckbox 
                    description="Provide your business' available options for parking" 
                    data={businessParkingData} updateCheck={updateBusinessParking} 
                />

                <FormRadio 
                    name="RestaurantsCounterService" 
                    value={RestaurantsCounterService} 
                    fieldName="Does your business have counter service? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormRadio 
                    name="RestaurantsDelivery" 
                    value={RestaurantsDelivery} 
                    fieldName="Does your business have delivery? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormRadio 
                    name="RestaurantsGoodForGroups" 
                    value={RestaurantsGoodForGroups} 
                    fieldName="Is your business good for groups? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormRadioMultiple 
                    name="WiFi" 
                    fieldName="Choose what best describe how your business provide Wi-Fi to customers"
                    onChange={update}
                    value={WiFi}
                    options={WiFiData}
                    onClick={handleClick} />

                <FormRadio 
                    name="RestaurantsTakeOut" 
                    value={RestaurantsTakeOut} 
                    fieldName="Does your business provide takeout? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormRadio 
                    name="WheelchairAccessible" 
                    value={WheelchairAccessible} 
                    fieldName="Does your business provide wheelchair? " 
                    onChange={update} 
                    onClick={handleClick}
                />

                <FormCheckbox 
                    description="Choose the day that is your best night" 
                    data={bestNightData} updateCheck={updateBestNight} 
                />

                <FormControl className="form-item">
                    <Button onClick={e => submit(e)} type="submit" variant="outlined" color="primary">Submit</Button>
                </FormControl>
                
            </form>

        </Fragment>
    )
}

export default BusinessForm
