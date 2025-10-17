import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import {
  Search,
  Bell,
  BarChart3,
  BookOpen,
  MessageCircle,
  Settings,
  Play,
  Calendar,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronLeft as ChevronLeftIcon,
  CheckCircle,
  Bookmark,
  Clock,
  Star
} from 'lucide-react'

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)


  const statsCards = [
    {
      icon: <Play className="w-5 h-5 text-blue-600" />,
      value: "8",
      label: "Ongoing Courses",
      change: "+12%",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      value: "24",
      label: "Completed",
      change: "+5",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100"
    },
    {
      icon: <Bookmark className="w-5 h-5 text-purple-600" />,
      value: "12",
      label: "Certificates",
      change: "+2",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100"
    },
    {
      icon: <Clock className="w-5 h-5 text-orange-600" />,
      value: "142",
      label: "Hours Spent",
      change: "+18h",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100"
    }
  ]

  const popularCourses = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      category: "AI & ML",
      lessons: "24 lessons • Intermediate",
      price: "₹1999",
      rating: "4.8",
      students: "2.5k students",
      image: "/AI_Tutor_New_UI/Dashboard/ML_fundamentals.png",
      categoryColor: "bg-indigo-100 text-indigo-600"
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      category: "Development",
      lessons: "36 lessons • Beginner",
      price: "₹1299",
      rating: "4.9",
      students: "2.5k students",
      image: "/AI_Tutor_New_UI/Dashboard/full_stack_web_dev.png",
      categoryColor: "bg-purple-100 text-purple-600"
    },
    {
      id: 3,
      title: "Data Analytics Masterclass",
      category: "Data Science",
      lessons: "28 lessons • Advanced",
      price: "₹1499",
      rating: "4.7",
      students: "2.5k students",
      image: "/AI_Tutor_New_UI/Dashboard/data_analytics.png",
      categoryColor: "bg-cyan-100 text-cyan-600"
    }
  ]

  const myCourses = [
    {
      id: 1,
      title: "Frontend Development",
      subtitle: "React Fundamentals",
      progress: 75,
      lessons: "18/24",
      level: "Intermediate",
      levelColor: "bg-green-100 text-green-800",
      image: "/AI_Tutor_New_UI/Dashboard/react_fundamentals_logo.png",
      progressColor: "bg-indigo-600"
    },
    {
      id: 2,
      title: "Python for AI",
      subtitle: "Artificial Intelligence",
      progress: 45,
      lessons: "9/20",
      level: "Beginner",
      levelColor: "bg-blue-100 text-blue-800",
      image: "/AI_Tutor_New_UI/Dashboard/python_for_ai_logo.png",
      progressColor: "bg-purple-600"
    },
    {
      id: 3,
      title: "Digital Marketing",
      subtitle: "Marketing",
      progress: 90,
      lessons: "27/30",
      level: "Advanced",
      levelColor: "bg-yellow-100 text-yellow-800",
      image: "/AI_Tutor_New_UI/Dashboard/logo.png",
      progressColor: "bg-cyan-600"
    }
  ]

  const continueLearning = [
    {
      id: 1,
      title: "React Fundamentals",
      lesson: "Lesson 18: State Management",
      progress: 75,
      image: "/AI_Tutor_New_UI/Dashboard/react_fundamentals_logo.png",
      progressColor: "bg-orange-400"
    },
    {
      id: 2,
      title: "Python for AI",
      lesson: "Lesson 9: Neural Networks",
      progress: 45,
      image: "/AI_Tutor_New_UI/Dashboard/python_for_ai_logo.png",
      progressColor: "bg-orange-400"
    },
    {
      id: 3,
      title: "Digital Marketing",
      lesson: "Lesson 27: SEO Optimization",
      progress: 90,
      image: "/AI_Tutor_New_UI/Dashboard/logo.png",
      progressColor: "bg-cyan-600"
    }
  ]

  const schedule = [
    {
      title: "Machine Learning",
      time: "10:00 AM - 11:30 AM",
      color: "bg-blue-50 border-l-blue-500"
    },
    {
      title: "React Development", 
      time: "2:00 PM - 3:30 PM",
      color: "bg-green-50 border-l-green-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        activePage="dashboard"
      />

      {/* Main Content */}
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-80'
      }`}>
        {/* Header */}
       

        {/* Dashboard Content */}
        <main className="flex-1 mt-10 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsCards.map((card, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${card.iconBg}`}>
                      {card.icon}
                    </div>
                    <span className="text-sm font-medium text-green-600">{card.change}</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{card.value}</div>
                  <div className="text-sm text-gray-600">{card.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Popular Courses */}
              <div className="xl:col-span-2">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Popular Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularCourses.map((course, index) => (
                    <Link to={`/course-preview/${course.id}`} key={index}>
                      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm h-full">
                        <div className="relative">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-40 object-cover"
                          />
                          <div className="absolute top-3 right-3 bg-white rounded-full p-2">
                            <Bookmark className="w-4 h-4 text-teal-600" />
                          </div>
                          <div className="absolute bottom-3 right-3 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs font-medium">{course.rating}</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${course.categoryColor}`}>
                            {course.category}
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                          <p className="text-sm text-gray-600 mb-4">{course.lessons}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-900">{course.price}</span>
                            <span className="text-xs text-gray-500">{course.students}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Course Topics Chart */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Course Topics</h2>
                <div className="relative flex items-center justify-center mb-6">
                  <div className="w-48 h-48 relative">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      {/* Pie chart segments */}
                      <circle 
                        cx="100" 
                        cy="100" 
                        r="80" 
                        fill="none" 
                        stroke="#FF885A" 
                        strokeWidth="40"
                        strokeDasharray="351.86 351.86"
                        strokeDashoffset="87.97"
                        transform="rotate(-90 100 100)"
                      />
                      <circle 
                        cx="100" 
                        cy="100" 
                        r="80" 
                        fill="none" 
                        stroke="#FFD0BD" 
                        strokeWidth="40"
                        strokeDasharray="70.37 281.49"
                        strokeDashoffset="263.89"
                        transform="rotate(-90 100 100)"
                      />
                      <circle 
                        cx="100" 
                        cy="100" 
                        r="80" 
                        fill="none" 
                        stroke="#FFA988" 
                        strokeWidth="40"
                        strokeDasharray="140.74 211.12"
                        strokeDashoffset="193.52"
                        transform="rotate(-90 100 100)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold">15</div>
                      <div className="text-xs text-gray-500">Total course</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-orange-400 mr-3"></div>
                    <span className="text-sm text-gray-600">Code (70%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-orange-200 mr-3"></div>
                    <span className="text-sm text-gray-600">Data (20%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-orange-300 mr-3"></div>
                    <span className="text-sm text-gray-600">Design (10%)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* My Courses Table */}
              <div className="xl:col-span-2">
                <h2 className="text-xl font-bold text-gray-900 mb-6">My Courses</h2>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-4 text-left text-sm font-medium text-gray-600">Course</th>
                          <th className="px-4 py-4 text-left text-sm font-medium text-gray-600">Progress</th>
                          <th className="px-4 py-4 text-left text-sm font-medium text-gray-600">Lessons</th>
                          <th className="px-4 py-4 text-left text-sm font-medium text-gray-600">Level</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {myCourses.map((course, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-4">
                              <Link to={`/course-preview/${course.id}`} className="flex items-center">
                                <img
                                  src={course.image}
                                  alt={course.title}
                                  className="w-12 h-12 rounded-lg mr-4"
                                />
                                <div>
                                  <div className="font-medium text-gray-900 hover:text-indigo-600">{course.title}</div>
                                  <div className="text-sm text-gray-600">{course.subtitle}</div>
                                </div>
                              </Link>
                            </td>
                            <td className="px-4 py-4">
                              <div className="w-20 bg-gray-200 rounded-full h-2 mb-1">
                                <div
                                  className={`h-2 rounded-full ${course.progressColor}`}
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                              <div className="text-sm text-gray-600">{course.progress}%</div>
                            </td>
                            <td className="px-4 py-4 text-gray-600">{course.lessons}</td>
                            <td className="px-4 py-4">
                              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${course.levelColor}`}>
                                {course.level}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Continue Learning */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Continue Learning</h2>
                <div className="space-y-4">
                  {continueLearning.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center">
                        <Link to={`/course-preview/${item.id}`} className="flex items-center flex-1">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-12 h-12 rounded-lg mr-4"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 mb-1 hover:text-teal-600">{item.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{item.lesson}</p>
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                              <div 
                                className={`h-2 rounded-full ${item.progressColor}`}
                                style={{ width: `${item.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </Link>
                        <Link to={`/learning/${item.id}`} className="ml-4 px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-lg hover:bg-teal-600">
                          Continue
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
              {/* Calendar */}
              <div className="xl:col-span-3 bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Class Calendar</h2>
                  <div className="flex items-center space-x-4">
                    <button className="p-2 bg-gray-100 rounded-lg">
                      <ChevronLeftIcon className="w-4 h-4" />
                    </button>
                    <span className="text-lg font-medium">December 2024</span>
                    <button className="p-2 bg-gray-100 rounded-lg">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-px mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="p-3 text-center text-sm font-medium text-gray-600">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-px">
                  {Array.from({ length: 31 }, (_, i) => (
                    <div 
                      key={i + 1} 
                      className={`p-3 text-center text-sm ${
                        [3, 5, 9, 12, 16, 19, 23].includes(i + 1) 
                          ? 'bg-blue-50 text-blue-900 rounded-lg' 
                          : 'text-gray-900 hover:bg-gray-50 rounded-lg'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-6 mt-6 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">Upcoming</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">Completed</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">Missed</span>
                  </div>
                </div>
              </div>

              {/* Today's Schedule */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
                <div className="space-y-3">
                  {schedule.map((item, index) => (
                    <div key={index} className={`p-3 rounded-lg border-l-4 ${item.color}`}>
                      <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
