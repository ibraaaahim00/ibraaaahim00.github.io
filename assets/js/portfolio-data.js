/**
 * =========================================================================
 * IBRAHIM ALAA — PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * All portfolio content is centralized in this single file.
 * To update your CV, projects, contact details, or experience,
 * simply edit this file and the entire website will update automatically!
 * =========================================================================
 */

const portfolioData = {
    // -------------------------------------------------------------
    // Personal Information
    // -------------------------------------------------------------
    personal: {
        name: "Ibrahim Alaa",
        nameArabic: "إبراهيم علاء",
        role: "Backend Developer — PHP / Laravel",
        status: "Backend systems / PHP / Laravel",
        location: "Egypt",
        bio: "Backend Developer focused on PHP and Laravel, with hands-on work across e-commerce, appointment booking, public-service workflows, and API-driven applications.",
        cvUrl: "assets/cv/Ibrahim_Alaa_CV.pdf", // Place your real PDF in assets/cv/
        socials: {
            github: "https://github.com/ibraaaahim00",
            linkedin: "", // Add your real LinkedIn URL when ready
            email: "", // Add your real email when ready
            phone: "" // Add your real phone number when ready
        }
    },

    // -------------------------------------------------------------
    // Core Engineering Metrics / Pillars (100% Genuine, No Fake Stats)
    // -------------------------------------------------------------
    pillars: [
        {
            title: "Clean Architecture",
            description: "Decoupled domain logic using Repository Pattern and Service Layer abstractions."
        },
        {
            title: "Concurrency Safety",
            description: "Preventing race conditions with database transactions and pessimistic locking (lockForUpdate)."
        },
        {
            title: "Robust REST APIs",
            description: "Standardized HTTP responses, Form Requests validation, and API Resources transformers."
        },
        {
            title: "Type Safety & States",
            description: "Strict PHP 8+ Enums managing validated status transitions and business rules."
        }
    ],

    // -------------------------------------------------------------
    // Skills Matrix (Strictly supported by real codebase)
    // -------------------------------------------------------------
    skills: {
        backend: [
            { name: "PHP 8.2+", level: "Core Language", tag: "Used in projects" },
            { name: "Laravel (10/11/12)", level: "Primary Framework", tag: "Used in projects" },
            { name: "OOP & SOLID", level: "Design Principles", tag: "Core" },
            { name: "MVC Architecture", level: "Framework Standard", tag: "Core" }
        ],
        database: [
            { name: "MySQL", level: "Relational Database", tag: "Core" },
            { name: "Eloquent ORM", level: "Data Modeling", tag: "Used in projects" },
            { name: "Query Builder", level: "Optimized Queries", tag: "Used in projects" },
            { name: "DB Transactions", level: "Atomicity & Rollbacks", tag: "Database" },
            { name: "Pessimistic Locking", level: "Race Condition Prevention", tag: "Database" }
        ],
        apis: [
            { name: "RESTful APIs", level: "Standard Compliant", tag: "Core" },
            { name: "Laravel Sanctum", level: "Token Authentication", tag: "Security" },
            { name: "API Resources", level: "Response Transformation", tag: "Core" },
            { name: "Form Requests", level: "Input Validation", tag: "Security" },
            { name: "Role Authorization", level: "Custom Middleware & Gates", tag: "Security" },
            { name: "OTP Authentication", level: "Mobile & Email Lifecycle", tag: "Workflow" }
        ],
        architecture: [
            { name: "Repository Pattern", level: "Data Layer Decoupling", tag: "Architecture" },
            { name: "Service Layer", level: "Business Logic Encapsulation", tag: "Architecture" },
            { name: "State Machines", level: "Enum-based Status Transitions", tag: "Data Integrity" },
            { name: "Audit Trail Logging", level: "Historical Change Tracking", tag: "History" },
            { name: "Immutable Snapshots", level: "Order & Invoice Integrity", tag: "Data Integrity" }
        ],
        frontend: [
            { name: "React 18", level: "Client-side SPAs (CivicFix)", tag: "Integration" },
            { name: "Next.js / TypeScript", level: "Fullstack Interface (Clinic)", tag: "Integration" },
            { name: "Vite", level: "Frontend Build Tooling", tag: "Tooling" },
            { name: "Blade Templates", level: "Server-side Rendering", tag: "Laravel Core" },
            { name: "Tailwind CSS", level: "Utility Styling", tag: "Styling" }
        ],
        tools: [
            { name: "Git & GitHub", level: "Version Control", tag: "Essential" },
            { name: "Postman & Apidog", level: "API Testing & Docs", tag: "API Testing" },
            { name: "XAMPP / MySQL", level: "Local Development", tag: "Environment" },
            { name: "PhpStorm / VS Code", level: "IDE", tag: "Tooling" }
        ]
    },

    // -------------------------------------------------------------
    // Projects Case Studies (Prioritized Order)
    // -------------------------------------------------------------
    projects: [
        {
            id: "awfar",
            title: "Awfar",
            subtitle: "E-commerce and delivery API",
            category: "Clean Architecture",
            featured: true,
            github: "https://github.com/ibraaaahim00/awfar",
            badge: "Clean Architecture • Repository Pattern • State Machine",
            summary: "An API for products, carts, orders, and delivery. The interesting part is how the code keeps order rules and data changes in one place.",
            
            // Full Case Study Details
            caseStudy: {
                problem: "Typical e-commerce backends suffer from bloated controllers, tight coupling between ORM queries and HTTP layers, race conditions in stock decrements, and corrupted order history when customers edit their profile addresses.",
                solution: "Architected a decoupled Laravel API utilizing the Repository Pattern with Contracts, an autonomous Service Layer extending a transactional base service, strict PHP 8 Enums guarding state transitions, and snapshot serialization for orders.",
                architecture: "Contract-Driven Clean Architecture: Controllers handle HTTP input via FormRequests → Delegate to Service Layer (OrderService, CartService, DeliveryService) → Interact with Data Layer via Repository Contracts (OrderRepository, ProductRepository) → Wrapped inside automated DB Transactions.",
                technologies: ["PHP 8.3", "Laravel", "MySQL", "Laravel Sanctum", "Repository Pattern", "Service Layer", "PHP Enums", "Form Requests", "API Resources"],
                keyFeatures: [
                    "Complete separation between HTTP controllers, business services, and database queries via Repository Contracts.",
                    "Enum-driven Order State Machine (canTransitionTo, isCancelable) preventing illegal status jumps.",
                    "Atomic inventory stock decrement on checkout with automatic replenishment if an order is cancelled.",
                    "Immutable address_snapshot saved as JSON with each order to guarantee invoice integrity regardless of future user profile updates.",
                    "Gamification & Loyalty points engine (GiftService) tracking purchase milestones and unlocking progressive rewards.",
                    "Dedicated multi-role endpoints for Customers, Delivery Drivers (/delivery), and Administrators (/admin).",
                    "Sanctum token authentication paired with a mobile OTP verification cycle (send, verify, resend)."
                ],
                engineeringDecisions: [
                    {
                        title: "Repository Contracts Decoupling",
                        description: "Binding interfaces (e.g. OrderRepository contract) to Eloquent implementations inside service providers, enabling clean unit testing and zero ORM leakage into controllers."
                    },
                    {
                        title: "Transaction-Wrapped Base Service",
                        description: "Implemented an abstract Base Service with an internal transaction helper ($this->transaction(fn() => ...)) ensuring all multi-step mutations execute atomically."
                    },
                    {
                        title: "Audit History Recording",
                        description: "Every state transition automatically creates an immutable record in order_status_histories tracking old status, new status, timestamp, and optional user note."
                    }
                ],
                codeSnippet: `// OrderService.php - State Machine & Atomic Inventory
public function transitionStatus(int $orderId, OrderStatus $to, ?int $changedBy = null): Order
{
    return $this->transaction(function () use ($orderId, $to, $changedBy) {
        $order = $this->orderRepository->findOrFail($orderId);
        $from = $order->status;

        if (! $from->canTransitionTo($to)) {
            throw new BusinessException('Invalid status transition.', 'status');
        }

        $order->status = $to;
        if ($to === OrderStatus::Delivered && $order->payment_method->isCash()) {
            $this->paymentService->markPaid($order);
        }
        $order->save();

        $this->orderStatusHistoryRepository->record($order->id, $from->value, $to->value, $changedBy);
        $this->notificationService->notify($order->user_id, 'Order Updated', ...);

        return $order;
    });
}`
            }
        },

        {
            id: "civicfix",
            title: "CivicFix",
            subtitle: "Citizen issue reporting and tracking",
            category: "Full Stack",
            featured: true,
            github: "https://github.com/ibraaaahim00/civicfix",
            badge: "Laravel API • React 18 • Vite • Audit Trails • Analytics",
            summary: "A Laravel API and React interface for submitting public-space issues, assigning them to technicians, and keeping a history of what happened to each report.",
            
            caseStudy: {
                problem: "Municipalities struggle with unstructured citizen complaints, lack of transparent tracking, lost attachments, and difficulty assigning field technicians with traceable accountability.",
                solution: "Engineered a Full-Stack solution: a secured Laravel API paired with a high-performance React 18/Vite SPA. Implemented role-based workflows (Citizen, Technician, Admin), real-time status dashboards, and an automated audit history table for every issue report.",
                architecture: "Monorepo Full-Stack Architecture: Laravel REST API acting as the headless backend protected by Sanctum tokens and Role middlewares, consumed by a React 18 SPA built with Vite and Axios.",
                technologies: ["PHP 8.3", "Laravel", "MySQL", "Laravel Sanctum", "React 18", "Vite", "Axios", "RESTful API", "Tailwind CSS"],
                keyFeatures: [
                    "Citizen issue submission with categorical classifications, priority scoring, geolocation coordinates, and image attachments.",
                    "Granular Role-Based Access Control (RBAC): citizen, technician, and admin roles with dedicated endpoint protections.",
                    "Audit Trail mechanism via ReportHistory logging every status change, responsible technician ID, and timestamp.",
                    "Supervisor dashboard featuring real-time overview analytics (StatsController::overview) calculating resolution rates.",
                    "Field technician dispatching workflow allowing administrators to assign reports and technicians to log resolution notes.",
                    "Fast, responsive React interface communicating asynchronously with backend endpoints."
                ],
                engineeringDecisions: [
                    {
                        title: "Traceable Report History (Audit Log)",
                        description: "Designed a dedicated ReportHistory model triggered upon any status modification, giving city officials a legally reliable timeline of who handled which ticket and when."
                    },
                    {
                        title: "Role-Enforced Endpoint Routing",
                        description: "Implemented role middleware guards on sensitive mutating endpoints (e.g. Route::patch('/reports/{report}/assign')->middleware('role:admin')) to eliminate privilege escalation."
                    }
                ],
                codeSnippet: `// api.php - Role-Protected Municipal Endpoints
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/stats/overview', [StatsController::class, 'overview']);
    Route::get('/reports', [ReportController::class, 'index']);
    Route::post('/reports', [ReportController::class, 'store'])
        ->middleware('role:citizen,admin');

    Route::patch('/reports/{report}/status', [ReportController::class, 'changeStatus'])
        ->middleware('role:admin,technician');

    Route::patch('/reports/{report}/assign', [ReportController::class, 'assign'])
        ->middleware('role:admin');
});`
            }
        },

        {
            id: "clinic-booking",
            title: "Clinic Booking",
            subtitle: "Appointment booking with slot locking",
            category: "Concurrency & APIs",
            featured: true,
            github: "https://github.com/ibraaaahim00/clinic_booking",
            badge: "Concurrency Control • lockForUpdate • Next.js • Sanctum",
            summary: "A clinic booking system where doctors publish availability and patients book a slot. The API locks the slot during booking so two requests cannot take it at once.",
            
            caseStudy: {
                problem: "In medical and booking applications, simultaneous appointment requests for the same time slot can lead to race conditions, causing two patients to secure the same doctor slot (double booking).",
                solution: "Implemented database-level pessimistic locking via DB::transaction and AvailabilitySlot::whereKey($id)->lockForUpdate(), strictly locking the slot record at the MySQL engine level until reservation verification finishes.",
                architecture: "Full-Stack Booking Architecture: Laravel REST API with granular resource controllers (Appointments, AvailabilitySlots, Doctors, Specialties) paired with a modern Next.js/TypeScript interface.",
                technologies: ["PHP 8.3", "Laravel", "MySQL", "Pessimistic Locking", "Laravel Sanctum", "Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
                keyFeatures: [
                    "Pessimistic locking (lockForUpdate) preventing any concurrent double-booking during peak reservation requests.",
                    "Automated slot state synchronization: cancelling an appointment instantly unlocks and frees the availability slot for other patients.",
                    "Slot re-validation on appointment reactivation: checks if the slot was claimed in the interim before allowing reactivation.",
                    "Granular Row-Level Access Control (authorizeAccess): patients only access their own records, doctors only their scheduled consultations.",
                    "Doctor availability generator generating configurable recurring time windows.",
                    "Integrated with a Next.js TypeScript frontend utilizing Shadcn/Radix UI components."
                ],
                engineeringDecisions: [
                    {
                        title: "Pessimistic Locking (lockForUpdate)",
                        description: "Prevented concurrent race conditions at the database level by holding an exclusive lock on the slot row throughout the booking transaction."
                    },
                    {
                        title: "Strict Appointment Status Lifecycle",
                        description: "Enforced transition rules: pending → confirmed | cancelled, confirmed → completed | cancelled. Banned arbitrary state jumps."
                    }
                ],
                codeSnippet: `// AppointmentController.php - Pessimistic Concurrency Control
$appointment = DB::transaction(function () use ($slot, $user, $data) {
    // Acquire exclusive row lock on slot to prevent race conditions
    $lockedSlot = AvailabilitySlot::whereKey($slot->id)
        ->lockForUpdate()
        ->firstOrFail();

    if ($lockedSlot->is_booked) {
        throw ValidationException::withMessages([
            'slotId' => ['Slot is already booked by another patient.']
        ]);
    }

    $lockedSlot->update(['is_booked' => true]);

    return Appointment::create([
        'patient_id'           => $user->patient->id,
        'doctor_id'            => $lockedSlot->doctor_id,
        'availability_slot_id' => $lockedSlot->id,
        'date'                 => $lockedSlot->date,
        'time'                 => $lockedSlot->start_time,
        'status'               => 'pending',
        'reason'               => $data['reason']
    ]);
});`
            }
        },

        {
            id: "alamaal",
            title: "ALAMAAL — جسر الأمل",
            subtitle: "Rehabilitation services and online payments",
            category: "Enterprise System",
            featured: true,
            github: "https://github.com/ibraaaahim00/ALAMAAL",
            badge: "Laravel 11 • MyFatoorah • Treatment Workflows • OTP • CMS",
            summary: "A Laravel platform connecting families with specialists, handling service orders and payments, and giving the team a way to manage treatment plans and site content.",
            
            caseStudy: {
                problem: "Families of children with special needs require customized consulting, structured treatment plan distribution, secure online payments, and direct communication with certified specialists.",
                solution: "Engineered a multi-role Laravel platform providing rehabilitation tracking, MyFatoorah checkout and webhook callbacks, treatment plan delivery with access permission gates, and custom OTP password recovery.",
                architecture: "Full-Stack Laravel MVC with Blade templates, Alpine.js, Tailwind CSS, coupled with an isolated /admin control panel and MyFatoorah payment gateway handler.",
                technologies: ["PHP 8.3", "Laravel 11/12", "MySQL", "MyFatoorah Payment Gateway", "Blade", "Tailwind CSS", "Alpine.js", "OTP Verification"],
                keyFeatures: [
                    "MyFatoorah online payment gateway integration supporting Visa, Mastercard, Mada, Apple Pay, and Fawry with automated callbacks.",
                    "Child Profile Registry (Child model) cataloging specific disabilities, diagnoses, and medical histories linked to parent accounts.",
                    "Treatment Plan workflow: specialists and admins create tailored treatment plans and upload attachments (OrderAttachment) securely.",
                    "Controlled Client Plan visibility: plans and notes are only visible to guardians upon verification (canViewPlan logic).",
                    "Custom OTP-based password recovery flow (PasswordResetController) with expiration and resend rate-limiting.",
                    "Dynamic coupon calculation engine validating minimum order thresholds and tracking per-user redemptions.",
                    "Full CMS administrative dashboard managing testimonials, educational content, interactive apps, and trust metrics."
                ],
                engineeringDecisions: [
                    {
                        title: "Treatment Plan Delivery Gates",
                        description: "Guardians cannot access treatment attachments or recommendations until payment status is confirmed and specialists officially approve the plan."
                    },
                    {
                        title: "Dynamic Coupon Validation",
                        description: "Validated coupons on both frontend and backend through a dedicated JSON endpoint with decimal price calculations before order creation."
                    }
                ],
                codeSnippet: `// CheckoutController.php - Payment & Coupon Execution
$couponCode = $request->coupon_code;
if ($couponCode) {
    $coupon = Coupon::where('code', strtoupper(trim($couponCode)))->first();
    if ($coupon && $coupon->isValid()) {
        $discount = $coupon->calculateDiscount($subtotal);
        $couponId = $coupon->id;
        $coupon->increment('used_count');
    }
}
$total = max(0, round($subtotal - $discount, 2));

$order = Order::create([
    'order_number'    => (string) random_int(100000, 999999),
    'user_id'         => $user->id,
    'service_id'      => $service->id,
    'coupon_id'       => $couponId,
    'total'           => $total,
    'payment_method'  => $paymentMethod,
    'payment_status'  => PaymentStatus::Paid,
    'status'          => OrderStatus::Pending,
]);`
            }
        },

        {
            id: "ezzhal",
            title: "Ezhal — إذهل",
            subtitle: "Water delivery website and content dashboard",
            category: "CMS & APIs",
            featured: false,
            github: "https://github.com/ibraaaahim00/ezzhal",
            badge: "Laravel 13 • Blade • CMS • Media Library",
            summary: "A bilingual Laravel website for a water-delivery service, backed by a dashboard that lets the team manage the public content without changing the code.",

            caseStudy: {
                problem: "A service website needs to change its banners, features, app screens, FAQs, reviews, and contact information without waiting for a code release.",
                solution: "Built a Laravel application with a server-rendered public site and an authenticated dashboard for managing the content that appears on it.",
                architecture: "Laravel MVC with Blade views, Eloquent models, session-based dashboard authentication, Form Requests, Vite assets, and Spatie Media Library for uploaded images.",
                technologies: ["PHP 8.3", "Laravel 13", "Blade", "Eloquent", "Vite", "Tailwind CSS", "Spatie Media Library", "Bootstrap 5"],
                keyFeatures: [
                    "Arabic and English content with a language switcher and RTL/LTR page direction.",
                    "Dashboard resources for banners, About content, features, app screens, FAQs, reviews, downloads, contacts, footer content, and cities.",
                    "Image upload and replacement for banners, app screens, reviews, and other content using Spatie Media Library.",
                    "Active flags and sort order for controlling which content is shown on the public site and in what order.",
                    "Validated contact form that stores messages and adds a notification in the dashboard.",
                    "Public home page assembled from editable database content, with safe fallback content when records are missing."
                ],
                engineeringDecisions: [
                    {
                        title: "Content stays editable",
                        description: "The public page reads its sections from focused Eloquent models instead of hardcoding every banner, feature, FAQ, and review in the view."
                    },
                    {
                        title: "One media path for uploads",
                        description: "Models use a single image collection and expose an image URL accessor, keeping media handling out of the Blade templates."
                    },
                    {
                        title: "Bilingual content at the model boundary",
                        description: "Models return the English fields when the locale is English, while the views can continue using the same attributes in both languages."
                    }
                ],
                codeSnippet: `// routes/web.php - Public site and dashboard resources
Route::get('/', [HomeController::class, 'index'])->name('site.home');
Route::post('/contact', [ContactController::class, 'store'])
    ->name('site.contact.store');

Route::middleware('auth')->group(function () {
    Route::resource('/dashboard/banners', BannerController::class)
        ->except(['show']);
    Route::resource('/dashboard/app-screens', AppScreenController::class)
        ->except(['show']);
});`
            }
        },

    ],

    // -------------------------------------------------------------
    // Verified Work Experience & Training
    // -------------------------------------------------------------
    experience: [
        {
            role: "Backend Developer",
            company: "Kabret",
            period: "Professional Experience",
            type: "Backend Engineering",
            highlights: [
                "Architected and deployed backend services and RESTful APIs using PHP and Laravel.",
                "Engineered relational database schemas and performed MySQL query optimizations.",
                "Integrated third-party APIs and webhooks ensuring reliable external service communications.",
                "Participated in active code reviews, promoting clean code standards and DRY principles."
            ]
        },
        {
            role: "Backend Developer",
            company: "7L Soft",
            period: "Professional Experience",
            type: "Backend Engineering",
            highlights: [
                "Built and maintained Laravel backend systems powering web and client applications.",
                "Optimized database performance through thoughtful index placement and eager loading.",
                "Implemented external API integrations and automated webhook processing.",
                "Contributed to core feature implementations and peer pull request reviews."
            ]
        },
        {
            role: "Backend Development Trainee",
            company: "Finteck",
            period: "3-Month Intensive Program • Mansoura",
            type: "Professional Training",
            highlights: [
                "Intensive 3-month backend training focused on modern PHP and Laravel development.",
                "Mastered relational database design, foreign key constraints, and indexing in MySQL.",
                "Built practical RESTful APIs with token-based authentication and secure input validation.",
                "Adopted version control workflows using Git and collaborative GitHub practices."
            ]
        }
    ]
};
