import {
  Project,
  EducationItem,
  SkillCategory,
  Certification,
  ContactInfo,
  ProcessStep,
  DetailedSkillCategory,
  SoftSkill,
  ExperienceItem
} from '../types';

export const personalDetails = {
  name: "Karthik Venkat Bhavani Kishor Kankanala",
  shortName: "Kishor Kankanala",
  titles: [
    "Full Stack Developer",
    "Computer Science Engineer",
    "AI Enthusiast"
  ],
  introAudioText: "Hi, I'm Kishor. I'm a full stack developer and computer science student passionate about building fast, scalable applications and intelligent AI solutions. Welcome to my portfolio!",
  bio: "I build fast, scalable applications using Java, Spring Boot, modern frontend technologies, and Python. Turning complex problems into elegant, high-performance solutions.",
  about: "I am a dedicated Computer Science Engineering student with a strong passion for Full Stack Development, Artificial Intelligence, and Machine Learning. I enjoy solving complex problems, building intelligent systems, and continuously exploring modern technologies to create scalable and efficient applications.",
  avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsAGknrrNUnQZrrXRJ4ilFqeDqlP9hge22Xf24s1k2kWZaljMfW3FMdj7QXyyWTMMEtqTWTUhz6CQ7nWwf6gxq9x-r76GAkEZdc6ix6Z_x1GFjxbDgAzS0hfZP11E5ROiLSHrnDmNYytK10bwE2r6NpR3i3G4peadCeoS1CxIuV5RcKMmuvYKhF5kwB3lpAW1pe06Y_0hbLCwJPH0DzE5jKq-nvJ5A2soIn9ChKACQH76j66kYmcTbb5BTmxkGVXWnoQ",
  stats: {
    cgpa: "7.8",
    cgpaLabel: "B.Tech CGPA",
    projects: "3",
    projectsLabel: "Major Projects",
    certifications: "7",
    certificationsLabel: "Certifications"
  }
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Research",
    description: "Exploring problem scopes, user requirements, and technical feasibility to lay a solid foundation for the architecture.",
    color: "bg-[#ff4b22]"
  },
  {
    number: "02",
    title: "Design",
    description: "Crafting clean architecture, intuitive wireframes, and scalable database schemas for smooth interaction and maintainability.",
    color: "bg-[#1e1e1e]"
  },
  {
    number: "03",
    title: "Develop",
    description: "Building robust backends and responsive frontend interfaces using modern frameworks, clean code practices, and security standards.",
    color: "bg-[#ff4b22]"
  },
  {
    number: "04",
    title: "Deploy",
    description: "Rigorous testing, performance optimization, cloud deployment, and continuous monitoring to ensure high reliability.",
    color: "bg-[#1e1e1e]"
  }
];

export const detailedSkillCategories: DetailedSkillCategory[] = [
  {
    title: "PROGRAMMING LANGUAGES",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 88 },
      { name: "C++", level: 82 },
      { name: "C", level: 80 }
    ]
  },
  {
    title: "FULL STACK",
    skills: [
      { name: "ReactJS", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML / CSS", level: 95 },
      { name: "JavaScript / TypeScript", level: 86 }
    ]
  },
  {
    title: "BACKEND & FRAMEWORKS",
    skills: [
      { name: "Spring Boot", level: 85 },
      { name: "FastAPI / Flask", level: 82 },
      { name: "REST APIs", level: 90 },
      { name: "Microservices", level: 78 }
    ]
  },
  {
    title: "DATABASES",
    skills: [
      { name: "MySQL", level: 86 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "Database Design", level: 84 }
    ]
  },
  {
    title: "TOOLS & AI/ML",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "YOLOv8 & OpenCV", level: 85 },
      { name: "Scikit-Learn & Pandas", level: 86 },
      { name: "VS Code & Linux", level: 88 }
    ]
  },
  {
    title: "COMPUTER SCIENCE CONCEPTS",
    skills: [
      { name: "Data Structures", level: 88 },
      { name: "Algorithms", level: 85 },
      { name: "DBMS", level: 87 },
      { name: "OOP & Cryptography", level: 89 }
    ]
  }
];

export const softSkillsList: SoftSkill[] = [
  {
    title: "LEADERSHIP",
    description: "Guiding teams, mentoring peers, and driving projects towards completion with structured vision."
  },
  {
    title: "PUBLIC SPEAKING",
    description: "Confident stage presentations, technical symposiums, and conveying complex ideas concisely."
  },
  {
    title: "TEAM COLLABORATION",
    description: "Thriving in agile sprints, cross-functional code reviews, and positive engineering culture."
  },
  {
    title: "COMMUNICATION",
    description: "Clear, concise, and structured written and verbal documentation of code and architectures."
  },
  {
    title: "PROBLEM SOLVING",
    description: "Breaking down complex bottlenecks into clean, logical algorithmic building blocks."
  },
  {
    title: "ADAPTABILITY",
    description: "Quick to pick up modern frameworks, libraries, and best practices seamlessly."
  },
  {
    title: "CREATIVITY",
    description: "Blending visual polish with high performance to craft memorable user interactions."
  },
  {
    title: "TIME MANAGEMENT",
    description: "Balancing strict deadlines, sprint priorities, and code quality systematically."
  }
];

export const experienceList: ExperienceItem[] = [
  {
    id: "hackathon",
    role: "Hackathon Finalist & Developer",
    organization: "Technical Symposium & Coding Competitions",
    period: "2023 - 2024",
    type: "HACKATHON",
    description: "Architected end-to-end full stack prototypes in 36-hour intense hackathons, presenting to industry judges and winning accolades."
  },
  {
    id: "lead",
    role: "Student Technical Coordinator",
    organization: "Dhanekula Institute of Engineering & Technology",
    period: "2023 - Present",
    type: "LEADERSHIP",
    description: "Organized coding bootcamps, managed technical workshops for 200+ students, and coordinated peer programming mentoring sessions."
  },
  {
    id: "research-proj",
    role: "Cryptographic Systems & ML Researcher",
    organization: "Academic Research Lab",
    period: "2024",
    type: "RESEARCH",
    description: "Developed privacy-preserving homomorphic e-voting architecture and deep learning aerial wildlife detection pipeline."
  }
];

export const educationList: EducationItem[] = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Dhanekula Institute of Engineering and Technology",
    details: "CGPA: 7.8 | Expected Graduation: 2026",
    year: "Expected Graduation: 2026",
    score: "CGPA: 7.8",
    highlights: [
      "Core coursework in Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks & AI.",
      "Hands-on development of ML models and full stack web architectures.",
      "Active participant in technical symposiums and coding hackathons."
    ]
  },
  {
    id: "intermediate",
    degree: "Intermediate (MPC)",
    institution: "Vidya Vikas Junior College",
    details: "Completed: 2022",
    year: "Completed: 2022",
    highlights: [
      "Specialized in Mathematics, Physics, and Chemistry (MPC).",
      "Built strong foundation in quantitative analytics, logic and problem solving."
    ]
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "Geethanjali High School",
    details: "Completed: 2020",
    year: "Completed: 2020",
    highlights: [
      "Comprehensive high school curriculum with distinction in Science and Mathematics.",
      "Participated in school science exhibitions and leadership activities."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming",
    icon: "code_blocks",
    skills: ["Java", "C++", "C", "Python"]
  },
  {
    id: "webdev",
    name: "Web Development",
    icon: "web",
    skills: ["Full Stack Development", "ReactJS", "Spring Boot", "REST APIs", "Tailwind CSS"]
  },
  {
    id: "dataml",
    name: "Data & ML",
    icon: "database",
    skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Data Analysis"]
  },
  {
    id: "deeplearning",
    name: "Deep Learning",
    icon: "psychology",
    skills: ["YOLOv8", "OpenCV", "Computer Vision", "Object Detection"]
  },
  {
    id: "tools",
    name: "Tools",
    icon: "build",
    skills: ["Git", "Google Colab", "VS Code", "GitHub", "Linux"]
  }
];

export const projectsList: Project[] = [
  {
    id: "evoting",
    number: "01",
    title: "Homomorphic-Based E-Voting System",
    description: "A secure electronic voting system leveraging homomorphic encryption to ensure vote privacy and tallying accuracy without decrypting individual ballots. Utilized Paillier cryptosystem for additive homomorphic properties.",
    tags: ["Python", "Cryptography", "Paillier", "Privacy Preserving"],
    icon: "how_to_vote",
    githubUrl: "https://github.com/kishorkankanala/homomorphic-evoting-system",
    details: {
      problem: "Traditional electronic voting systems risk compromising ballot secrecy when tallying or requiring centralized decryption authorities vulnerable to insider threats.",
      solution: "Engineered an end-to-end encrypted voting pipeline using the Paillier cryptosystem where encrypted ballots are aggregated homomorphically. The final tally is decrypted without revealing any single voter's ballot.",
      keyFeatures: [
        "Additive homomorphic ballot summation preventing intermediate ballot exposure",
        "Cryptographic zero-knowledge proof verification for valid ballot range checking",
        "Distributed key generation and multi-party threshold decryption",
        "Tamper-evident audit log with SHA-256 state hashing"
      ],
      techStack: ["Python", "Paillier Cryptosystem", "FastAPI / Flask", "Cryptography Library", "React UI"],
      metrics: ["100% Ballot Anonymity", "O(N) Homomorphic Addition", "Zero plaintext leakage"],
      codeSnippet: `# Paillier Additive Homomorphic Addition
from phe import paillier

# Generate keypair
public_key, private_key = paillier.generate_paillier_keypair(n_length=2048)

# Encrypt individual votes (1 for Candidate A, 0 for Candidate B)
enc_vote_1 = public_key.encrypt(1)
enc_vote_2 = public_key.encrypt(1)
enc_vote_3 = public_key.encrypt(0)

# Homomorphic sum without decryption: E(m1) * E(m2) * E(m3) = E(m1 + m2 + m3)
enc_total = enc_vote_1 + enc_vote_2 + enc_vote_3

# Decrypt final tally only
tally = private_key.decrypt(enc_total)
print(f"Verified Final Tally: {tally}")`
    }
  },
  {
    id: "restaurant",
    number: "02",
    title: "Restaurant Recommendation System",
    description: "An intelligent recommendation engine utilizing K-Means clustering algorithm on Zomato dataset to suggest dining options based on user preferences and location data. Optimized cluster count using the Elbow Method and Silhouette Analysis.",
    tags: ["Machine Learning", "K-Means", "Python", "Data Science"],
    icon: "restaurant",
    githubUrl: "https://github.com/kishorkankanala/restaurant-recommendation-engine",
    details: {
      problem: "Diners face decision paralysis when browsing through thousands of heterogeneous restaurant listings with varied cuisines, pricing tiers, and ratings.",
      solution: "Constructed a multi-dimensional recommendation pipeline incorporating user rating profiles, location coordinates, cost for two, and TF-IDF cuisine vectorization with K-Means clustering to yield hyper-relevant suggestions.",
      keyFeatures: [
        "Unsupervised K-Means clustering with optimal K determined via Elbow Method & Silhouette Scores",
        "Feature scaling and normalization for balanced distance metrics across price & ratings",
        "Interactive geospatial filtering based on geographic proximity",
        "Content-based filtering fallback for cold-start users"
      ],
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib / Seaborn", "Streamlit"],
      metrics: ["0.74 Silhouette Score", "Analyzed 10,000+ Zomato Records", "< 50ms Query Latency"],
      codeSnippet: `# K-Means Clustering & Silhouette Analysis
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(features[['latitude', 'longitude', 'cost_for_two', 'rating']])

# Finding optimal clusters
optimal_k = 6
kmeans = KMeans(n_clusters=optimal_k, init='k-means++', random_state=42)
clusters = kmeans.fit_predict(X_scaled)

score = silhouette_score(X_scaled, clusters)
print(f"Optimal cluster partition silhouette: {score:.3f}")`
    }
  },
  {
    id: "wildlife",
    number: "03",
    title: "Aerial Wildlife Detection",
    description: "A deep learning vision system employing YOLOv8 and OpenCV to accurately detect and classify wildlife from aerial imagery, aiding in conservation efforts. Integrated altitude-aware scaling for precise bounding box estimation in drone footage.",
    tags: ["YOLOv8", "OpenCV", "Deep Learning", "Drone Vision"],
    icon: "nature",
    githubUrl: "https://github.com/kishorkankanala/aerial-wildlife-detection-yolov8",
    details: {
      problem: "Manual wildlife tracking in vast forest reserves and savannahs via aerial drone surveys is tedious, error-prone, and struggles with small animal footprints at high altitudes.",
      solution: "Trained and fine-tuned a custom YOLOv8 object detection model on high-resolution aerial datasets with multi-scale feature pyramids, data augmentations (mosaic, rotation, blur), and altitude-compensation bounding scaling.",
      keyFeatures: [
        "Fine-tuned YOLOv8 architecture optimized for top-down drone perspectives",
        "Real-time video processing pipeline with OpenCV and non-maximum suppression (NMS)",
        "Automated animal counting and spatial density heatmapping",
        "Exported ONNX / TensorRT runtime for embedded edge deployment on drones"
      ],
      techStack: ["YOLOv8", "PyTorch", "OpenCV", "Python", "Roboflow", "CUDA"],
      metrics: ["89.4% mAP@0.5", "45 FPS Real-Time Inference", "7 Species Classified"],
      codeSnippet: `# Aerial Wildlife Real-time Inference Pipeline
from ultralytics import YOLO
import cv2

# Load fine-tuned YOLOv8 drone model
model = YOLO('models/yolov8_wildlife_aerial.pt')

# Process aerial frame
def process_aerial_frame(frame, conf_threshold=0.45):
    results = model.predict(source=frame, conf=conf_threshold, imgsz=640, device='cuda:0')
    annotated_frame = results[0].plot()
    
    # Extract species counts
    detected_classes = [model.names[int(box.cls[0])] for box in results[0].boxes]
    return annotated_frame, detected_classes`
    }
  }
];

export const certificationsList: Certification[] = [
  {
    id: "python-infosys",
    title: "Python Foundation",
    issuer: "Infosys Springboard",
    issueDate: "2023",
    badgeType: "programming"
  },
  {
    id: "java-infosys",
    title: "Java Foundation",
    issuer: "Infosys Springboard",
    issueDate: "2023",
    badgeType: "programming"
  },
  {
    id: "devops-infosys",
    title: "DevOps Foundation",
    issuer: "Infosys Springboard",
    issueDate: "2023",
    badgeType: "cloud"
  },
  {
    id: "c-cpp-iitb",
    title: "C and C++",
    issuer: "IIT Bombay Spoken Tutorial",
    issueDate: "2022",
    badgeType: "system"
  },
  {
    id: "php-mysql-iitb",
    title: "PHP and MySQL",
    issuer: "IIT Bombay Spoken Tutorial",
    issueDate: "2022",
    badgeType: "database"
  },
  {
    id: "joomla-iitb",
    title: "Joomla",
    issuer: "IIT Bombay Spoken Tutorial",
    issueDate: "2022",
    badgeType: "cms"
  },
  {
    id: "blender-iitb",
    title: "Blender",
    issuer: "IIT Bombay Spoken Tutorial",
    issueDate: "2022",
    badgeType: "3d"
  }
];

export const contactData: ContactInfo = {
  phone: "+919398431347",
  displayPhone: "9398431347",
  email: "kishorkankanala82@gmail.com",
  linkedin: "https://www.linkedin.com/in/kankanala-kishor-12b10a25b/",
  linkedinDisplay: "linkedin.com/in/kankanala-kishor-12b10a25b",
  github: "https://github.com/kishorkankanala",
  location: "Vijayawada, Andhra Pradesh, India"
};
