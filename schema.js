const { gql } = require('apollo-server-express');

//typeDef - same name in apollo server
exports.typeDefs = gql `
    type Admin {
        id: ID!
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!
    }

    type Customer {
        id: ID!
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!
    }

    type Listing {
        listing_id: ID!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        username: String!

    }

    type Booking {
        listing_id: String!
        booking_id: ID!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        username: String!

    }

    type Query {
        getListings: [Listing]
        getBookings: [Booking]
        getListingByName(listing_title: String!): [Listing]
        getListingByCity(city: String!): [Listing]
        getListingByPostcode(postal_code: String!): [Listing]
    }

    type Mutation {
        createCustomer(
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!
        ) : Customer

        createListing(
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            username: String!
        ) : Listing

        createBooking(
            listing_id: String!
            booking_date: String!
            booking_start: String!
            booking_end: String!
            username: String!
        ) : Booking

    }
`