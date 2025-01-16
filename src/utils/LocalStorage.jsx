const employees = [
    {
      id: 1,
      name: "Rohit",
      email: "e@e.com",
      password: "123",
      taskNumber: {
        active: 2,
        newTask: 1,
        completed: 0,
        failed : 2
      },
      tasks: [
        {
          title: "Prepare monthly report",
          description: "Compile data for the monthly performance review.",
          date: "2025-01-10",
          category: "Reporting",
          active: true,
          newTask: false,
          completed: false,
        },
        {
          title: "Team meeting",
          description: "Discuss project updates with the team.",
          date: "2025-01-11",
          category: "Meeting",
          active: false,
          newTask: true,
          completed: false,
        },
        {
          title: "Code review",
          description: "Review code for the new feature implementation.",
          date: "2025-01-12",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
        },
      ],
    },
    {
      id: 2,
      name: "Vivaan Patel",
      email: "employee2@example.com",
      password: "123",
      taskNumber: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed : 2
      },
      tasks: [
        {
          title: "Client feedback",
          description: "Gather feedback from the client about the project.",
          date: "2025-01-10",
          category: "Client Communication",
          active: true,
          newTask: true,
          completed: false,
        },
        {
          title: "Bug fixing",
          description: "Fix reported issues from the QA team.",
          date: "2025-01-11",
          category: "Development",
          active: false,
          newTask: false,
          completed: true,
        },
        {
          title: "Database optimization",
          description: "Optimize the queries for faster response times.",
          date: "2025-01-13",
          category: "Database",
          active: true,
          newTask: false,
          completed: false,
        },
      ],
    },
    {
      id: 3,
      name: "Ishaan Gupta",
      email: "employee3@example.com",
      password: "123",
      taskNumber: {
        active: 2,
        newTask: 1,
        completed: 0,
        failed : 2
      },
      tasks: [
        {
          title: "UI Design Update",
          description: "Revamp the dashboard interface.",
          date: "2025-01-15",
          category: "Design",
          active: true,
          newTask: false,
          completed: false,
        },
        {
          title: "Team brainstorming session",
          description: "Plan new features for the upcoming release.",
          date: "2025-01-14",
          category: "Meeting",
          active: false,
          newTask: true,
          completed: false,
        },
        {
          title: "Testing scripts",
          description: "Write automated tests for the login functionality.",
          date: "2025-01-12",
          category: "Testing",
          active: true,
          newTask: true,
          completed: false,
        },
      ],
    },
    {
      id: 4,
      name: "Arjun Reddy",
      email: "employee4@example.com",
      password: "123",
      taskNumber: {
        active: 2,
        newTask: 1,
        completed: 0,
        failed : 2
      },
      tasks: [
        {
          title: "API integration",
          description: "Integrate third-party APIs for data retrieval.",
          date: "2025-01-13",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
        },
        {
          title: "Bug triage",
          description: "Categorize and prioritize new bug reports.",
          date: "2025-01-12",
          category: "QA",
          active: true,
          newTask: true,
          completed: false,
        },
      ],
    },
    {
      id: 5,
      name: "Priya Verma",
      email: "employee5@example.com",
      password: "123",
      taskNumber: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed : 2
      },
      tasks: [
        {
          title: "Marketing content review",
          description: "Review the new blog posts for publication.",
          date: "2025-01-10",
          category: "Marketing",
          active: false,
          newTask: true,
          completed: true,
        },
        {
          title: "DevOps pipeline update",
          description: "Update CI/CD configurations for the new microservices.",
          date: "2025-01-11",
          category: "DevOps",
          active: true,
          newTask: false,
          completed: false,
        },
      ],
    },
    {
      id: 6,
      name: "Saanvi Mehta",
      email: "employee6@example.com",
      password: "123",
      taskNumber: {
        active: 2,
        newTask: 2,
        completed: 0,
        failed : 2
      },
      tasks: [
        {
          title: "Codebase refactoring",
          description: "Refactor old modules for better maintainability.",
          date: "2025-01-12",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
        },
        {
          title: "Client presentation",
          description: "Prepare slides for the upcoming client meeting.",
          date: "2025-01-14",
          category: "Presentation",
          active: false,
          newTask: true,
          completed: false,
        },
      ],
    },
    {
      id: 7,
      name: "Ravi Kumar",
      email: "employee7@example.com",
      password: "123",
      taskNumber: {
        active: 2,
        newTask: 1,
        completed: 0,
        failed : 2
      },
      tasks: [
        {
          title: "Data migration",
          description: "Migrate legacy database to the new system.",
          date: "2025-01-13",
          category: "Database",
          active: true,
          newTask: false,
          completed: false,
        },
        {
          title: "Security audit",
          description: "Conduct a security audit for recent changes.",
          date: "2025-01-15",
          category: "Security",
          active: true,
          newTask: true,
          completed: false,
        },
      ],
    },
    {
      id: 8,
      name: "Tanvi Joshi",
      email: "employee8@example.com",
      password: "123",
      taskNumber: {

        active: 1,
        newTask: 1,
        completed: 1,
        failed : 2
      },
      tasks: [
        {
          title: "Performance testing",
          description: "Test the system under high-load conditions.",
          date: "2025-01-11",
          category: "Testing",
          active: true,
          newTask: true,
          completed: false,
        },
        {
          title: "Content update",
          description: "Update the FAQ section on the website.",
          date: "2025-01-12",
          category: "Content",
          active: false,
          newTask: false,
          completed: true,
        },
      ],
    },
    {
      id: 9,
      name: "Ananya Singh",
      email: "employee9@example.com",
      password: "123",
      taskNumber: {
        active: 2,
        newTask: 1,
        completed: 0,
        failed : 2
      },
      tasks: [
        {
          title: "Social media analytics",
          description: "Analyze the performance of recent posts.",
          date: "2025-01-10",
          category: "Marketing",
          active: true,
          newTask: true,
          completed: false,
        },
        {
          title: "Backend module development",
          description: "Develop API endpoints for user authentication.",
          date: "2025-01-14",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
        },
      ],
    },
    {
      id: 10,
      name: "Aditi Shah",
      email: "employee10@example.com",
      password: "123",
      taskNumber: {
        active: 1,
        newTask: 1,
        completed: 0,
        failed : 2
      },
      tasks: [
        {
          title: "Dashboard testing",
          description: "Test the analytics dashboard for edge cases.",
          date: "2025-01-11",
          category: "Testing",
          active: true,
          newTask: false,
          completed: false,
        },
        {
          title: "Customer query resolution",
          description: "Respond to pending customer support tickets.",
          date: "2025-01-10",
          category: "Support",
          active: false,
          newTask: true,
          completed: false,
        },
      ],
    },
  ];
  
  const admin = [
    {
      id: 1,
      name: "Raghav Verma",
      email: "admin@example.com",
      password: "123",
    },
  ];
  


  
  export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
      
}