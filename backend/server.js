 const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

// MongoDB connection with error handling
mongoose.connect('mongodb://127.0.0.1:27017/fruitvegmarket', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB successfully');
    // Seed the database after successful connection
    seedDatabase();
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});

app.use(express.json());
app.use(cors());

const productSchema = new mongoose.Schema({
    name: String,
    type: String,
    description: String,
    price: Number,
    image: String,
});

const Product = mongoose.model('Product', productSchema);

// Function to seed initial data into the database
const seedDatabase = async () => {
    try {
        // Clear existing products
        await Product.deleteMany({});
        console.log('Cleared existing products');

        const products = [
            {
                name: 'Apple',
                type: 'Fruit',
                description: 'Fresh and crispy',
                price: 150,
                image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240104142542/apple.jpg'
            },
            {
                name: 'Banana',
                type: 'Fruit',
                description: 'Rich in potassium',
                price: 75,
                image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240104142554/banana.jpg'
            },
            {
                name: 'Orange',
                type: 'Fruit',
                description: 'Packed with vitamin C',
                price: 200,
                image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240104142641/orange.jpg'
            },
            {
                name: 'Carrot',
                type: 'Vegetable',
                description: 'Healthy and crunchy',
                price: 100,
                image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240104142613/carrot.jpg'
            },
            {
                name: 'Broccoli',
                type: 'Vegetable',
                description: 'Nutrient-rich greens',
                price: 175,
                image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240104142601/brocoli.jpg'
            },
            {
                name: 'Mango',
                type: 'Fruit',
                description: 'Sweet and juicy tropical fruit',
                price: 250,
                image: 'https://images.pexels.com/photos/4023132/pexels-photo-4023132.jpeg'
            },
            {
                name: 'Tomato',
                type: 'Vegetable',
                description: 'Rich in lycopene and vitamin C',
                price: 80,
                image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg'
            },
            {
                name: 'Grapes',
                type: 'Fruit',
                description: 'Sweet and refreshing',
                price: 180,
                image: 'https://images.pexels.com/photos/693794/pexels-photo-693794.jpeg'
            }
        ];

        await Product.insertMany(products);
        console.log('Database seeded successfully with', products.length, 'products');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

// Define API endpoint for fetching all products
app.get('/api/products', async (req, res) => {
    try {
        const allProducts = await Product.find();
        console.log('Fetched products:', allProducts.length);
        res.json(allProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Define API endpoint for adding a new product
app.post('/api/products', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        console.log('Added new product:', savedProduct);
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 