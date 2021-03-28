export const ProcessData = (formData) => {
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
     return estimateRating(
        AgesAllowed, 
        Alcohol,
        BYOBCorkage,
        BusinessAcceptsBitcoin,
        Music,
        BusinessAcceptsCreditCards,
        DogsAllowed,
        DriveThru,
        HasTV,
        NoiseLevel,
        Open24Hours,
        OutdoorSeating,
        Smoking,
        Ambience,
        CoatCheck,
        GoodForKids,
        RestaurantsTableService,
        GoodForMeal,
        RestaurantsReservations,
        BikeParking,
        RestaurantsAttire,
        DietaryRestrictions,
        Caters,
        GoodForDancing,
        HappyHour,
        BusinessParking,
        RestaurantsCounterService,
        RestaurantsGoodForGroups,
        WiFi,
        RestaurantsTakeOut,
        WheelchairAccessible,
        BestNights
    );
}

const estimateRating = (
	minAge,		// 1-hot boolean array (0 = 18+, 1 = 19+, 2 = 21+, 3 = All Ages or Blank)
	alcohol,	// 1-hot boolean array (0 = Full Bar, 1 = Beer and Wine, 2 = Blank)
	byob,		// 1-hot boolean array (0 = No or Blank, 1 = Corkage, 2 = Free)
	bitcoin,	// boolean (is bitcoin accepted, default = false)
	music,		// boolean array (0 = DJ, 1 = Background, 2 = Jukebox, 3 = Live, 4 = Video, 5 = Karaoke)
	card,		// boolean (is credit card accepted)
	dogs,		// boolean (are dogs allowed)
	driveThru,	// boolean (is there a drive-thru)
	tv,		// boolean (is there a TV)
	noise,		// 1-hot boolean array (0 = Quiet, 1 = Average, 2 = Loud, 3 = Very Loud, 4 = Blank)
	allDay,		// boolean (is it open 24 hours per day)
	outdoor,	// boolean (is there outdoor seating)
	smoking,	// boolean (is smoking allowed)
	ambience,	// 1-hot boolean array (0 = Romantic, 1 = Intimate, 2 = Classy, 3 = Hipster, 4 = Divey, 5 = Touristy, 6 = Trendy, 7 = Upscale, 8 = Casual)
	coatCheck,	// boolean (is there coat check)
	kids,		// boolean (is it kid-friendly)
	tableService,	// boolean (is table service provided)
	mealChoice,	// boolean array (0 = Breakfast, 1 = Brunch, 2 = Lunch, 3 = Dinner, 4 = Dessert, 5 = Late Night)
	reservations,	// boolean (are reservations allowed)
	bikeParking,	// boolean (is ther bike parking)
	attire,		// 1-hot boolean array (0 = Casual, 1 = Dressy, 2 = Normal, 3 = Blank)
	diets,		// boolean array (0 = Dariy Free, 1 = Gluten Free, 2 = Soy Free, 3 = Vegetarian, 4 = Vegan, 5 = Kosher, 6 = Halal)
	cater,		// boolean (is there catering)
	dancing,	// boolean (is there dancing)
	happyHour,	// boolean (is there happy hour)
	parking,	// boolean array (0 = Garage, 1 = Street, 2 = Validated, 3 = Lot, 4 = Valet)
	counterService,	// boolean (is there counter service)
	groups,		// boolean (is it good for groups)
	wifi,		// 1-hot boolean array (0 = None or Blank, 1 = Free, 2 = Paid)
	takeout,	// boolean (is there takeout)
	wheelchair,	// boolean (is there wheelchair)
	bestNights	
) => {
    return -1;
}