const Admin = require('./models/Admin');
const Customer = require('./models/Customer');
const Listing = require('./models/Listing');
const Booking = require('./models/Booking');

exports.resolvers = {
    Query: {
        getListings: async (parent, args) => {
            return Listing.find({})
        },
        getBookings: async (parent, args) => {
            return Booking.find(args.id)
        },
        getListingByName: async (parent, args) => {
            return Listing.find({"listing_title": args.listing_title})
        },
        getListingByCity: async (parent, args) => {
            return Listing.find({"city": args.city})
        },
        getListingByPostcode: async (parent, args) => {
            return Listing.find({"postal_code": args.postal_code})
        }   
    },

    Mutation: {

        createCustomer: async (parent, args) => {
            console.log(args)

            let newCust = new Customer({
                username: args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                password: args.password,
                email: args.email,
                type: args.type
            })

            return newCust.save()
        },

        createListing: async (parent, args) => {
            console.log(args)

            let newList = new Listing({
                listing_title: args.listing_title,
                description: args.description,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                username: args.username 
            })

            return newList.save()
        },

        createBooking: async (parent, args) => {
            console.log(args)

            let newBook = new Booking({
                listing_id: args.listing_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                username: args.username
            })

            return newBook.save()
        },

    }
}