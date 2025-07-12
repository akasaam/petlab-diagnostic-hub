import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Star, 
  Heart,
  Pill,
  Stethoscope,
  Scissors,
  Thermometer,
  Syringe,
  Shield
} from "lucide-react";

const BrowseProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Dog Food - Adult",
      price: "₹1,250",
      originalPrice: "₹1,500",
      rating: 4.8,
      category: "Nutrition",
      image: "🐕",
      description: "High-quality nutrition for adult dogs with essential vitamins and minerals",
      inStock: true,
      discount: "17% OFF"
    },
    {
      id: 2,
      name: "Cat Flea & Tick Shampoo",
      price: "₹450",
      originalPrice: "₹550",
      rating: 4.6,
      category: "Grooming",
      image: "🐱",
      description: "Gentle yet effective flea and tick control shampoo for cats",
      inStock: true,
      discount: "18% OFF"
    },
    {
      id: 3,
      name: "Digital Pet Thermometer",
      price: "₹850",
      originalPrice: "₹1,000",
      rating: 4.9,
      category: "Medical",
      image: "🌡️",
      description: "Accurate digital thermometer designed specifically for pets",
      inStock: true,
      discount: "15% OFF"
    },
    {
      id: 4,
      name: "Multivitamin Tablets",
      price: "₹680",
      originalPrice: "₹800",
      rating: 4.7,
      category: "Supplements",
      image: "💊",
      description: "Complete multivitamin supplement for overall pet health",
      inStock: true,
      discount: "15% OFF"
    },
    {
      id: 5,
      name: "Pet First Aid Kit",
      price: "₹1,200",
      originalPrice: "₹1,400",
      rating: 4.8,
      category: "Medical",
      image: "🏥",
      description: "Complete first aid kit with essential medical supplies for pets",
      inStock: true,
      discount: "14% OFF"
    },
    {
      id: 6,
      name: "Dental Care Chews",
      price: "₹320",
      originalPrice: "₹400",
      rating: 4.5,
      category: "Dental",
      image: "🦷",
      description: "Natural dental chews to maintain oral hygiene",
      inStock: false,
      discount: "20% OFF"
    }
  ];

  const categories = [
    { name: "All Products", icon: ShoppingCart, count: 156 },
    { name: "Nutrition", icon: Heart, count: 42 },
    { name: "Medical", icon: Stethoscope, count: 38 },
    { name: "Grooming", icon: Scissors, count: 29 },
    { name: "Supplements", icon: Pill, count: 24 },
    { name: "Dental", icon: Thermometer, count: 18 },
    { name: "Preventive", icon: Shield, count: 15 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Browse Pet Care Products</h1>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Discover premium pet care products, supplements, and medical supplies for your beloved pets. Quality guaranteed.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <category.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Price Range</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Under ₹500</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">₹500 - ₹1000</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">₹1000 - ₹2000</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Above ₹2000</span>
                    </label>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                  <Input
                    placeholder="Search for products..."
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </Button>
              </div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="group hover:shadow-medium transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="relative">
                        <div className="text-4xl text-center mb-3">{product.image}</div>
                        <Badge 
                          className="absolute top-0 right-0 bg-primary text-secondary"
                        >
                          {product.discount}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{product.category}</Badge>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-primary text-primary" />
                          <span className="text-xs font-medium">{product.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-lg font-bold text-primary">{product.price}</span>
                        <span className="text-sm text-neutral-500 line-through">{product.originalPrice}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 btn-primary"
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                        <Button variant="outline" size="icon">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" className="px-8">
                  Load More Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BrowseProducts;