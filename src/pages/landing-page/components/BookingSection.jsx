import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import toast from "react-hot-toast";
import apiConfig from "../../../assets/config/apiConfig";
import axios from "axios";

const BookingSection = ({ onBookDemo }) => {
    const [formStep, setFormStep] = useState(1);
    const [isPaymentSuccess, setIsPaymentSuccess] = useState(() => {
        const savedPaymentStatus = localStorage.getItem("demoPaymentSuccess");
        return savedPaymentStatus === "true";
    });

    useEffect(() => {
        const savedPaymentStatus = localStorage.getItem("demoPaymentSuccess");
        if (savedPaymentStatus === "true") {
            setIsPaymentSuccess(true);
        }
    }, []);

    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        name: "",
        country: "",
        timezone: "",
        goal: "",
        experience: "",
        availability: "",
        whatsappOptIn: false,
    });
    const [detectedTimezone, setDetectedTimezone] = useState("");
    const [availableSlots, setAvailableSlots] = useState([]);
    const [urgencyCount, setUrgencyCount] = useState(3);
    const [showBankDetails, setShowBankDetails] = useState(false);

    const countries = [
        { value: "USD", label: "United States 🇺🇸" },
        { value: "CAD", label: "Canada 🇨🇦" },
        { value: "AED", label: "UAE 🇦🇪" },
        { value: "SGD", label: "Singapore 🇸🇬" },
        { value: "EUR", label: "Europe 🇪🇺" },
        { value: "INR", label: "India 🇮🇳" },
    ];

    const goals = [
        { value: "weight-loss", label: "Weight Loss" },
        { value: "weight-gain", label: "Weight/Muscle Gain" },
        { value: "clinical", label: "Health Condition Management" },
        { value: "competition", label: "Competition Preparation" },
        { value: "general", label: "General Fitness" },
    ];

    const experiences = [
        { value: "beginner", label: "Beginner (0-1 years)" },
        { value: "intermediate", label: "Intermediate (1-3 years)" },
        { value: "advanced", label: "Advanced (3+ years)" },
    ];

    const timeSlots = [
        { value: "morning", label: "Morning (6 AM - 10 AM)" },
        { value: "afternoon", label: "Afternoon (12 PM - 4 PM)" },
        { value: "evening", label: "Evening (6 PM - 9 PM)" },
        { value: "flexible", label: "Flexible" },
    ];

    useEffect(() => {
        // Check payment status on mount
        const checkPaymentStatus = () => {
            const savedPaymentStatus =
                localStorage.getItem("demoPaymentSuccess");
            const savedPaymentDetails =
                localStorage.getItem("demoPaymentDetails");

            if (savedPaymentStatus === "true" && savedPaymentDetails) {
                setIsPaymentSuccess(true);
                // Optionally show a welcome back message
                toast.success("Welcome back! Your booking is confirmed.");
            }
        };

        checkPaymentStatus();

        // Simulate timezone detection
        const timezone = Intl.DateTimeFormat()?.resolvedOptions()?.timeZone;
        setDetectedTimezone(timezone);

        // Simulate urgency counter
        const urgencyInterval = setInterval(() => {
            setUrgencyCount((prev) => {
                if (prev <= 1) return Math.floor(Math.random() * 5) + 1;
                return prev - 1;
            });
        }, 30000);

        // Generate available slots based on timezone
        generateAvailableSlots();

        return () => clearInterval(urgencyInterval);
    }, [formData?.country]);

    const generateAvailableSlots = () => {
        const slots = [];
        const today = new Date();

        for (let i = 1; i <= 7; i++) {
            const date = new Date(today);
            date?.setDate(today?.getDate() + i);

            const daySlots = [
                { time: "9:00 AM", available: Math.random() > 0.3 },
                { time: "2:00 PM", available: Math.random() > 0.4 },
                { time: "6:00 PM", available: Math.random() > 0.2 },
                { time: "8:00 PM", available: Math.random() > 0.5 },
            ];

            slots?.push({
                date: date?.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                }),
                slots: daySlots,
            });
        }

        setAvailableSlots(slots);
    };

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const handlePayment = async () => {
        try {
            localStorage.setItem("demoPaymentSuccess", false);
            const res = await initializeRazorpay();

            if (!res) {
                toast.error("Razorpay SDK failed to load");
                return;
            }

            const getPriceForCountry = () => {
                // All prices equivalent to 35000 INR
                const currencyWiseAmount = {
                    INR: { amount: 35000, symbol: "₹", currency: "INR" }, // ₹35000 INR
                    USD: { amount: 420, symbol: "$", currency: "USD" }, // $420 USD
                    CAD: { amount: 565, symbol: "$", currency: "CAD" }, // $565 CAD
                    AED: { amount: 1550, symbol: "د.إ", currency: "AED" }, // 1550 AED
                    SGD: { amount: 570, symbol: "S$", currency: "SGD" }, // $570 SGD
                    EUR: { amount: 390, symbol: "€", currency: "EUR" }, // €390 EUR
                };
                // Use selected currency or default to USD
                const selectedCurrency = formData.country || "USD";
                return currencyWiseAmount[selectedCurrency];
            };

            const priceDetails = getPriceForCountry();

            const options = {
                key: apiConfig.RAZORPAY_MERCHANT_ID,
                amount: priceDetails.amount * 100, // Amount in smallest currency unit
                currency: priceDetails.currency,
                name: "FWG International",
                description: "International Client Package",
                handler: async function (response) {
                    try {
                        // Show initial success toast and save state immediately
                        toast.success(
                            "Payment received! Confirming your booking..."
                        );

                        // Immediately save payment success and details
                        localStorage.setItem("demoPaymentSuccess", "true");
                        localStorage.setItem(
                            "demoPaymentDetails",
                            JSON.stringify({
                                paymentId: response.razorpay_payment_id,
                                currency: priceDetails.currency,
                                amount: priceDetails.amount,
                                timestamp: new Date().toISOString(),
                                formData: formData, // Store form data for persistence
                            })
                        );

                        // Set state immediately
                        setIsPaymentSuccess(true);

                        // Create an instance of axios with base URL
                        const { data } = await axios.post(
                            `${apiConfig.BASE_URL}/public/v1/guest-payment/international-client`,
                            {
                                payment_id: response.razorpay_payment_id,
                                currency: priceDetails.currency,
                            }
                        );

                        if (data.success) {
                            // Update state and localStorage
                            setIsPaymentSuccess(true);
                            localStorage.setItem("demoPaymentSuccess", "true");

                            localStorage.setItem(
                                "demoPaymentDetails",
                                JSON.stringify({
                                    paymentId: response.razorpay_payment_id,
                                    currency: priceDetails.currency,
                                    amount: priceDetails.amount,
                                    timestamp: new Date().toISOString(),
                                })
                            );

                            // Show final success toast after a short delay
                            setTimeout(() => {
                                toast.success(
                                    "Booking confirmed! Our team will contact you soon on WhatsApp."
                                );
                            }, 1000);

                            // Call the callback
                            onBookDemo &&
                                onBookDemo({
                                    ...formData,
                                    paymentId: response.razorpay_payment_id,
                                    currency: priceDetails.currency,
                                    amount: priceDetails.amount,
                                });
                        }
                    } catch (error) {
                        console.error("Payment verification error:", {
                            status: error.response?.status,
                            message: error.response?.data?.message,
                            error: error,
                        });
                        toast.error(
                            error.response?.data?.message ||
                                `Payment verification failed: ${error.response?.status}. Please contact support.`
                        );
                    }
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone,
                },
                notes: {
                    name: formData.name,
                    source: window.location.origin + window.location.pathname,
                    page_url: window.location.href,
                },
                theme: {
                    color: "#FF5A1F",
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.on("payment.failed", function (response) {
                toast.error("Payment failed. Please try again.");
            });
            paymentObject.open();
        } catch (error) {
            toast.error("Something went wrong with the payment initialization");
            console.error("Payment error:", error);
        }
    };

    const handleSubmit = (e) => {
        e?.preventDefault();

        if (formStep === 1) {
            if (!formData.email) {
                toast.error("Please enter your email address");
                return;
            }
            if (!formData.email.includes("@")) {
                toast.error("Please enter a valid email address");
                return;
            }
        }

        if (formStep === 2) {
            if (!formData.name) {
                toast.error("Please enter your full name");
                return;
            }
            if (!formData.phone) {
                toast.error("Please enter your WhatsApp number");
                return;
            }
            if (!formData.country) {
                toast.error("Please select your country");
                return;
            }
        }

        if (formStep === 3) {
            if (!formData.goal) {
                toast.error("Please select your primary goal");
                return;
            }
            if (!formData.experience) {
                toast.error("Please select your fitness experience");
                return;
            }
            if (!formData.availability) {
                toast.error("Please select your preferred time");
                return;
            }
        }

        if (formStep < 4) {
            setFormStep(formStep + 1);
            toast.success("Great! Let's continue to the next step");
        } else if (formStep === 4) {
            e?.preventDefault();
            setFormStep(6); // Step 6 will be payment options
            toast.success("Great! Please select your payment method");
        }
    };

    const renderFormStep = () => {
        switch (formStep) {
            case 1:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-text-primary mb-2">
                                Let's Get Started
                            </h3>
                            <p className="text-text-secondary">
                                Enter your email to begin your transformation
                                journey
                            </p>
                        </div>
                        <Input
                            type="email"
                            label="Email Address"
                            placeholder="your.email@example.com"
                            value={formData?.email}
                            onChange={(e) =>
                                handleInputChange("email", e?.target?.value)
                            }
                            className="text-lg"
                        />
                        <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                            <div className="flex items-center space-x-2 text-primary">
                                <Icon name="Shield" size={16} />
                                <span className="text-sm font-medium">
                                    Your email is 100% secure and never shared
                                </span>
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-text-primary mb-2">
                                Personal Details
                            </h3>
                            <p className="text-text-secondary">
                                Help us personalize your experience
                            </p>
                        </div>
                        <Input
                            type="text"
                            label="Full Name"
                            placeholder="Enter your full name"
                            value={formData?.name}
                            onChange={(e) =>
                                handleInputChange("name", e?.target?.value)
                            }
                        />
                        <Input
                            type="tel"
                            label="WhatsApp Number"
                            placeholder="+1 (555) 123-4567"
                            description="We'll send you a confirmation via WhatsApp"
                            value={formData?.phone}
                            onChange={(e) =>
                                handleInputChange("phone", e?.target?.value)
                            }
                        />
                        <Select
                            label="Current Country"
                            placeholder="Select your country"
                            options={countries}
                            value={formData?.country}
                            onChange={(value) =>
                                handleInputChange("country", value)
                            }
                        />
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-text-primary mb-2">
                                Fitness Goals
                            </h3>
                            <p className="text-text-secondary">
                                Tell us what you want to achieve
                            </p>
                        </div>
                        <Select
                            label="Primary Goal"
                            placeholder="What's your main fitness goal?"
                            options={goals}
                            value={formData?.goal}
                            onChange={(value) =>
                                handleInputChange("goal", value)
                            }
                        />
                        <Select
                            label="Fitness Experience"
                            placeholder="How experienced are you?"
                            options={experiences}
                            value={formData?.experience}
                            onChange={(value) =>
                                handleInputChange("experience", value)
                            }
                        />
                        <Select
                            label="Preferred Time"
                            placeholder="When can you usually train?"
                            options={timeSlots}
                            value={formData?.availability}
                            onChange={(value) =>
                                handleInputChange("availability", value)
                            }
                        />
                    </div>
                );

            case 4:
                const getPriceForCountry = () => {
                    const currencyWiseAmount = {
                        INR: { amount: 35000, symbol: "₹", currency: "INR" },
                        USD: { amount: 420, symbol: "$", currency: "USD" },
                        CAD: { amount: 565, symbol: "$", currency: "CAD" },
                        AED: { amount: 1550, symbol: "د.إ", currency: "AED" },
                        SGD: { amount: 570, symbol: "S$", currency: "SGD" },
                        EUR: { amount: 390, symbol: "€", currency: "EUR" },
                    };
                    return (
                        currencyWiseAmount[formData.country] ||
                        currencyWiseAmount.other
                    );
                };

                const priceDetails = getPriceForCountry();

                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-text-primary mb-2">
                                International Client Package
                            </h3>
                            <p className="text-text-secondary">
                                Complete Fitness & Diet Consultation
                            </p>
                        </div>
                        <div className="bg-success/5 rounded-xl p-6 border border-success/20">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-semibold text-text-primary">
                                    Package Details
                                </h4>
                                <div className="text-success font-medium">
                                    {priceDetails.symbol}
                                    {priceDetails.amount}
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-text-secondary">
                                <div className="flex items-center space-x-2">
                                    <Icon
                                        name="Check"
                                        size={16}
                                        className="text-success"
                                    />
                                    <span>Personalized Diet Plan</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Icon
                                        name="Check"
                                        size={16}
                                        className="text-success"
                                    />
                                    <span>Custom Exercise Program</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Icon
                                        name="Check"
                                        size={16}
                                        className="text-success"
                                    />
                                    <span>24/7 WhatsApp Support</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Icon
                                        name="Check"
                                        size={16}
                                        className="text-success"
                                    />
                                    <span>Progress Tracking</span>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-success/20">
                                <div className="flex items-center space-x-2">
                                    <Icon
                                        name="Info"
                                        size={16}
                                        className="text-primary"
                                    />
                                    <span className="text-xs text-text-secondary">
                                        One-time payment for complete
                                        consultation package
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 5: // Bank Transfer Details
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-text-primary mb-2">
                                Bank Transfer Details
                            </h3>
                            <p className="text-text-secondary">
                                Please transfer the amount and share screenshot
                                on WhatsApp
                            </p>
                        </div>

                        <div className="space-y-6 bg-white rounded-xl p-6 border border-border">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-text-secondary block mb-1">
                                        Bank Name
                                    </label>
                                    <p className="text-lg font-semibold text-text-primary">
                                        HDFC Bank
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-text-secondary block mb-1">
                                        Account Name
                                    </label>
                                    <p className="text-lg font-semibold text-text-primary">
                                        FWG International
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-text-secondary block mb-1">
                                        Account Number
                                    </label>
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-border">
                                        <p className="font-mono text-lg font-semibold text-text-primary">
                                            50100123456789
                                        </p>
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(
                                                    "50100123456789"
                                                );
                                                toast.success(
                                                    "Account number copied!"
                                                );
                                            }}
                                            className="text-primary hover:text-primary/80 p-2 hover:bg-primary/5 rounded-lg transition-colors"
                                        >
                                            <Icon name="Copy" size={20} />
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-text-secondary block mb-1">
                                        IFSC Code
                                    </label>
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-border">
                                        <p className="font-mono text-lg font-semibold text-text-primary">
                                            HDFC0001234
                                        </p>
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(
                                                    "HDFC0001234"
                                                );
                                                toast.success(
                                                    "IFSC code copied!"
                                                );
                                            }}
                                            className="text-primary hover:text-primary/80 p-2 hover:bg-primary/5 rounded-lg transition-colors"
                                        >
                                            <Icon name="Copy" size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-success/5 rounded-xl p-4 border border-success/20 mt-6">
                                <div className="flex items-start space-x-3">
                                    <Icon
                                        name="AlertCircle"
                                        size={20}
                                        className="text-success flex-shrink-0 mt-1"
                                    />
                                    <div className="space-y-2">
  <p className="text-sm font-medium text-text-primary">
    Next Steps:
  </p>
  <ol className="text-sm text-text-secondary space-y-1 list-decimal ml-4">
    <li>
      Transfer the exact amount shown above
    </li>
    <li>
      Take a screenshot of the successful transfer
    </li>
    <li>
      Click the WhatsApp button below to send the screenshot to 
      <span className="font-semibold text-text-primary ml-1">
        +91 98765 43210
      </span>
    </li>
    <li>
      Receive confirmation within 24 hours
    </li>
  </ol>
</div>
                                </div>
                            </div>
                        </div>

                        <Button
                            type="button"
                            variant="default"
                            size="lg"
                            fullWidth
                            className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-cta mt-4"
                            onClick={() => {
                                const message = encodeURIComponent(
                                    "Hello FWG International, I have completed the bank transfer. I am attaching the payment screenshot."
                                );

                                const whatsappUrl = `https://wa.me/919876897649?text=${message}`;

                                // ✅ Open in new tab
                                window.open(whatsappUrl, "_blank");
                            }}
                        >
                            <div className="flex items-center justify-center w-full">
                                <Icon
                                    name="MessageCircle"
                                    size={24}
                                    className="mr-2"
                                />
                                <span>Send Screenshot via WhatsApp</span>
                            </div>
                        </Button>

                        <div className="bg-primary/5 rounded-xl p-4 border border-primary/20 mt-4">
                            <div className="flex items-center space-x-2">
                                <Icon
                                    name="Shield"
                                    size={16}
                                    className="text-primary"
                                />
                                <span className="text-sm">
                                    Secure and verified bank account
                                </span>
                            </div>
                        </div>

                        <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            fullWidth
                            onClick={() => {
                                setFormStep(6);
                                setShowBankDetails(false);
                            }}
                        >
                            <Icon name="ArrowLeft" size={20} className="mr-2" />
                            Back to Payment Options
                        </Button>
                    </div>
                );

            case 6: // Payment Options
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-text-primary mb-2">
                                Select Payment Method
                            </h3>
                            <p className="text-text-secondary">
                                Choose your preferred way to pay
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Button
                                type="button"
                                variant="default"
                                size="lg"
                                fullWidth
                                onClick={handlePayment}
                                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-cta p-6"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                        <Icon
                                            name="CreditCard"
                                            size={24}
                                            className="mr-3"
                                        />
                                        <div className="text-left">
                                            <div className="font-semibold">
                                                Pay with Card
                                            </div>
                                            <div className="text-sm opacity-90">
                                                Instant confirmation
                                            </div>
                                        </div>
                                    </div>
                                    <Icon name="ArrowRight" size={20} />
                                </div>
                            </Button>

                            <Button
                                type="button"
                                variant="outline"
                                size="lg"
                                fullWidth
                                onClick={() => {
                                    setFormStep(5);
                                    setShowBankDetails(true);
                                }}
                                className="p-6"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                        <Icon
                                            name="Building"
                                            size={24}
                                            className="mr-3"
                                        />
                                        <div className="text-left">
                                            <div className="font-semibold">
                                                Bank Transfer
                                            </div>
                                            <div className="text-sm opacity-90">
                                                Manual verification required
                                            </div>
                                        </div>
                                    </div>
                                    <Icon name="ArrowRight" size={20} />
                                </div>
                            </Button>
                        </div>

                        <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                            <div className="flex items-center space-x-2">
                                <Icon
                                    name="Shield"
                                    size={16}
                                    className="text-primary"
                                />
                                <span className="text-sm">
                                    All payment methods are secure and encrypted
                                </span>
                            </div>
                        </div>

                        <Button
                            type="button"
                            variant="ghost"
                            size="lg"
                            fullWidth
                            onClick={() => setFormStep(4)}
                        >
                            <Icon name="ArrowLeft" size={20} className="mr-2" />
                            Back to Details
                        </Button>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <section
            id="demo-booking"
            className="py-20 bg-gradient-to-br from-primary/5 to-accent/5"
        >
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                        Book Your{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Consultation Session
                        </span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Experience our personalized coaching style tailored to
                        your fitness goals
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Demo Benefits */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl p-6 shadow-cta border border-border">
                                <h3 className="text-xl font-bold text-text-primary mb-4">
                                    What You'll Get:
                                </h3>

                                <div className="space-y-4">
                                    {[
                                        {
                                            icon: "UserCheck",
                                            title: "Personal Assessment",
                                            description:
                                                "Complete fitness and nutrition evaluation tailored to your lifestyle abroad",
                                        },
                                        {
                                            icon: "Target",
                                            title: "Goal Setting Session",
                                            description:
                                                "Define clear, achievable targets with realistic timelines for your situation",
                                        },
                                        {
                                            icon: "Utensils",
                                            title: "Sample Meal Plan",
                                            description:
                                                "Get a 3-day Indian meal plan using ingredients available in your country",
                                        },
                                        {
                                            icon: "Dumbbell",
                                            title: "Custom Workout Preview",
                                            description:
                                                "Experience a mini-workout session designed for your fitness level and space",
                                        },
                                        {
                                            icon: "Calculator",
                                            title: "Cost Comparison Analysis",
                                            description:
                                                "See exactly how much you'll save compared to local trainers and nutritionists",
                                        },
                                        {
                                            icon: "MessageCircle",
                                            title: "WhatsApp Community Access",
                                            description:
                                                "Join our exclusive group of Indians abroad for ongoing support and motivation",
                                        },
                                    ]?.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-3"
                                        >
                                            <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                                <Icon
                                                    name={benefit?.icon}
                                                    size={16}
                                                    color="#38A169"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-text-primary mb-1">
                                                    {benefit?.title}
                                                </h4>
                                                <p className="text-sm text-text-secondary">
                                                    {benefit?.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Testimonial Quote */}
                            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
                                <div className="flex items-center space-x-3 mb-4">
                                    <img
                                        src="https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=100"
                                        alt="Client testimonial"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="font-semibold text-text-primary">
                                            Priya S.
                                        </div>
                                        <div className="text-sm text-text-secondary">
                                            Toronto, Canada
                                        </div>
                                    </div>
                                </div>
                                <p className="text-text-secondary italic">
                                    "They understood my challenges as an Indian
                                    living in Canada and created a plan that
                                    actually worked with my lifestyle. Best
                                    decision ever!"
                                </p>
                            </div>
                        </div>

                        {/* Booking Form */}
                        <div className="bg-white rounded-3xl shadow-testimonial p-8 border border-border">
                            {/* Progress Indicator or Success Message */}
                            {isPaymentSuccess ? (
                                <div className="mb-8">
                                    {/* Success Animation */}
                                    <div className="flex flex-col items-center justify-center mb-6">
                                        <div className="relative">
                                            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-4 animate-pulse">
                                                <Icon
                                                    name="CheckCircle"
                                                    size={40}
                                                    className="text-success animate-scale"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-success mb-2">
                                            Payment Successful!
                                        </h3>
                                        <div className="text-center space-y-2">
                                            <p className="text-text-secondary">
                                                Your booking has been confirmed
                                                successfully.
                                            </p>
                                            <p className="text-sm text-success font-medium">
                                                Our team will contact you on
                                                WhatsApp within 24 hours
                                            </p>
                                        </div>
                                    </div>
                                    {/* Success Steps */}
                                    <div className="space-y-4 bg-success/5 rounded-xl p-4 border border-success/20">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                                                <Icon
                                                    name="WhatsApp"
                                                    size={16}
                                                    className="text-success"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-text-primary">
                                                    WhatsApp Contact
                                                </p>
                                                <p className="text-xs text-text-secondary">
                                                    Expect our message within 24
                                                    hours
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                                                <Icon
                                                    name="Calendar"
                                                    size={16}
                                                    className="text-success"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-text-primary">
                                                    Schedule Confirmation
                                                </p>
                                                <p className="text-xs text-text-secondary">
                                                    We'll arrange your preferred
                                                    time slot
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                                                <Icon
                                                    name="FileText"
                                                    size={16}
                                                    className="text-success"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-text-primary">
                                                    Preparation Guide
                                                </p>
                                                <p className="text-xs text-text-secondary">
                                                    You'll receive session
                                                    details soon
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center justify-between mb-8">
                                    {[1, 2, 3, 4]?.map((step) => (
                                        <div
                                            key={step}
                                            className="flex items-center"
                                        >
                                            <div
                                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                                                    step < formStep
                                                        ? "bg-primary text-white"
                                                        : step === formStep
                                                        ? "bg-primary text-white"
                                                        : "bg-gray-200 text-gray-500"
                                                }`}
                                            >
                                                {step < formStep ? (
                                                    <Icon
                                                        name="Check"
                                                        size={16}
                                                    />
                                                ) : step === formStep ? (
                                                    step
                                                ) : formStep >= 5 &&
                                                  step === 4 ? (
                                                    <Icon
                                                        name="Check"
                                                        size={16}
                                                    />
                                                ) : (
                                                    step
                                                )}
                                            </div>
                                            {step < 4 && (
                                                <div
                                                    className={`w-8 h-1 mx-2 ${
                                                        step < formStep
                                                            ? "bg-primary"
                                                            : "bg-gray-200"
                                                    }`}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {isPaymentSuccess ? (
                                <div className="space-y-6">
                                    <div className="bg-success/5 rounded-xl p-6 border border-success/20">
                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-3">
                                                <div className="w-6 h-6 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                                    <Icon
                                                        name="WhatsApp"
                                                        size={14}
                                                        className="text-success"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-text-primary mb-1">
                                                        WhatsApp Support
                                                    </h4>
                                                    <p className="text-sm text-text-secondary">
                                                        Our team will contact
                                                        you on WhatsApp within
                                                        24 hours
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-6 h-6 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                                    <Icon
                                                        name="Calendar"
                                                        size={14}
                                                        className="text-success"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-text-primary mb-1">
                                                        Session Details
                                                    </h4>
                                                    <p className="text-sm text-text-secondary">
                                                        You'll receive your
                                                        session details and
                                                        preparation guide soon
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        fullWidth
                                        onClick={() => {
                                            localStorage.removeItem(
                                                "demoPaymentSuccess"
                                            );
                                            localStorage.removeItem(
                                                "demoPaymentDetails"
                                            );
                                            setIsPaymentSuccess(false);
                                            setFormStep(1);
                                            setFormData({
                                                email: "",
                                                phone: "",
                                                name: "",
                                                country: "",
                                                timezone: "",
                                                goal: "",
                                                experience: "",
                                                availability: "",
                                                whatsappOptIn: false,
                                            });
                                        }}
                                    >
                                        <Icon
                                            name="RotateCcw"
                                            size={20}
                                            className="mr-2"
                                        />
                                        Book Another Session
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    {renderFormStep()}

                                    {formStep < 5 && ( // 5 & 6 step ma hide karva mate
                                        <div className="mt-8 space-y-4">
                                            <Button
                                                type="submit"
                                                variant="default"
                                                size="lg"
                                                fullWidth
                                                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-cta"
                                            >
                                                {formStep === 4
                                                    ? "Confirm Transformation Booking"
                                                    : "Continue"}
                                                <Icon
                                                    name="ArrowRight"
                                                    size={20}
                                                    className="ml-2"
                                                />
                                            </Button>

                                            {formStep > 1 && (
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    size="lg"
                                                    fullWidth
                                                    onClick={() =>
                                                        setFormStep(
                                                            formStep - 1
                                                        )
                                                    }
                                                >
                                                    <Icon
                                                        name="ArrowLeft"
                                                        size={20}
                                                        className="mr-2"
                                                    />
                                                    Back
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                </form>
                            )}

                            {/* Trust Indicators */}
                            <div className="mt-6 pt-6 border-t border-border">
                                <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
                                    <div className="flex items-center space-x-1">
                                        <Icon
                                            name="Shield"
                                            size={14}
                                            color="#38A169"
                                        />
                                        <span>Trustable</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Icon
                                            name="Clock"
                                            size={14}
                                            color="#38A169"
                                        />
                                        <span>Any Time</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Icon
                                            name="X"
                                            size={14}
                                            color="#38A169"
                                        />
                                        <span>No Commitment</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
