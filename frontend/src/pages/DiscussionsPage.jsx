import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import {
  Heart,
  Reply,
  Image as ImageIcon,
  Code,
  AtSign,
  Bot,
  Bookmark
} from 'lucide-react'

const DiscussionsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState('Recent')
  const [questionTitle, setQuestionTitle] = useState('')
  const [questionDescription, setQuestionDescription] = useState('')
  const [replyText, setReplyText] = useState('')

  const tabs = ['Recent', 'Unanswered', 'My Doubts', 'Popular']

  const initialDiscussions = [
    {
      id: 1,
      user: {
        name: "Alex Chen",
        avatar: "AI_Tutor_New_UI/Discussion_Room/alexchen.jpg",
        level: "Beginner",
        levelColor: "bg-blue-100 text-blue-800"
      },
      timeAgo: "2 hours ago",
      title: "How to handle state management in React?",
      description: "I'm struggling with managing state across multiple components. Should I use Context API or Redux? What are the best practices for a medium-sized application?",
      likes: 12,
      replies: 5,
      hasAISuggestion: true,
      aiSuggestion: {
        text: "For medium-sized apps, Context API is often sufficient. Consider Redux only if you need time-travel debugging or complex state logic. Here are some resources that might help..."
      },
      responses: [
        {
          user: {
            name: "Sarah Kim",
            avatar: "AI_Tutor_New_UI/Discussion_Room/sarahkim.jpg",
            level: "Expert",
            levelColor: "bg-green-100 text-green-800"
          },
          timeAgo: "1 hour ago",
          text: "I'd recommend starting with Context API for your use case. It's simpler and built into React. Only move to Redux if you find Context becoming unwieldy.",
          likes: 8
        }
      ]
    },
    {
      id: 2,
      user: {
        name: "Mike Johnson",
        avatar: "/ui/avatar-3.png",
        level: "Intermediate",
        levelColor: "bg-yellow-100 text-yellow-800"
      },
      timeAgo: "4 hours ago",
      title: "Best practices for API error handling?",
      description: "What's the recommended way to handle API errors in a React application? Should I use try-catch blocks or error boundaries?",
      likes: 7,
      replies: 3,
      hasAISuggestion: false
    }
  ]

  const [discussions, setDiscussions] = useState(initialDiscussions)

  const myCourses = [
    {
      title: "React Fundamentals",
      subtitle: "Lesson 18: State Management",
      progress: 75,
      lessons: "18/24",
      image: "AI_Tutor_New_UI/Discussion_Room/react_fundamentals.png",
      progressColor: "bg-indigo-600",
      isActive: true
    },
    {
      title: "Python for AI",
      subtitle: "Lesson 9: Neural Networks",
      progress: 45,
      lessons: "9/20",
      image: "AI_Tutor_New_UI/Discussion_Room/python_for_ai.png",
      progressColor: "bg-purple-600",
      isActive: false
    },
    {
      title: "Digital Marketing",
      subtitle: "Lesson 27: SEO Optimization",
      progress: 90,
      lessons: "27/30",
      image: "AI_Tutor_New_UI/Discussion_Room/digital_marketing.png",
      progressColor: "bg-cyan-600",
      isActive: false
    }
  ]

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    if (!questionTitle.trim() || !questionDescription.trim()) return;

    const newQuestion = {
      id: Date.now(),
      user: {
        name: "Eliza Chris", // Placeholder for the current user
        avatar: "/ui/avatar-4.png",
        level: "Beginner",
        levelColor: "bg-blue-100 text-blue-800",
      },
      timeAgo: "Just now",
      title: questionTitle,
      description: questionDescription,
      likes: 0,
      replies: 0,
      hasAISuggestion: false,
      responses: [],
    };

    setDiscussions([newQuestion, ...discussions]);
    setQuestionTitle('')
    setQuestionDescription('')
  }

  const handleReply = (discussionId) => {
    // Handle reply submission logic here
    console.log('Reply submitted for discussion:', discussionId, replyText)
    setReplyText('')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        activePage="discussions"
      />

      {/* Main Content */}
      <div className={`flex-1 flex transition-all duration-300 mt-10 ${
        sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-80'
      }`}>
        {/* Discussion Content */}
        <main className="flex-1 bg-gray-50 p-4 sm:p-6">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {/* Ask a Question Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Ask a Question</h2>
              <form onSubmit={handleSubmitQuestion} className="space-y-4">
                <input
                  type="text"
                  placeholder="Title of your question..."
                  value={questionTitle}
                  onChange={(e) => setQuestionTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Describe your doubt in detail..."
                  value={questionDescription}
                  onChange={(e) => setQuestionDescription(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <button type="button" className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-800">
                      <ImageIcon className="w-4 h-4" />
                      <span className="text-sm">Image</span>
                    </button>
                    <button type="button" className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-800">
                      <Code className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </button>
                    <button type="button" className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-800">
                      <AtSign className="w-4 h-4" />
                      <span className="text-sm">Mention</span>
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-orange-500 to-teal-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Post Question
                  </button>
                </div>
              </form>
            </div>

            {/* Filter Tabs */}
            <div className="bg-white rounded-xl border border-gray-200 p-2 shadow-sm">
              <div className="flex space-x-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-orange-500 to-teal-500 text-white'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Discussion Threads */}
            <div className="space-y-4 sm:space-y-6">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
                  {/* Discussion Header */}
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                    <img
                      src={discussion.user.avatar}
                      alt={discussion.user.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                        <span className="font-medium text-gray-900">{discussion.user.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${discussion.user.levelColor}`}>
                            {discussion.user.level}
                          </span>
                          <span className="text-sm text-gray-500">{discussion.timeAgo}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{discussion.title}</h3>
                      <p className="text-gray-700 mb-4">{discussion.description}</p>
                      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{discussion.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                          <Reply className="w-4 h-4" />
                          <span className="text-sm">{discussion.replies} replies</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-yellow-500">
                          <Bookmark className="w-4 h-4" />
                          <span className="text-sm">Save</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* AI Suggestion */}
                  {discussion.hasAISuggestion && (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-2">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">AI Suggestion</h4>
                          <p className="text-sm text-gray-700">{discussion.aiSuggestion.text}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Responses */}
                  {discussion.responses && discussion.responses.map((response, index) => (
                    <div key={index} className="ml-4 sm:ml-8 border-l-2 border-gray-100 pl-4 sm:pl-6 mb-4">
                      <div className="flex items-start space-x-3">
                        <img
                          src={response.user.avatar}
                          alt={response.user.name}
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                            <span className="font-medium text-gray-900">{response.user.name}</span>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${response.user.levelColor}`}>
                                {response.user.level}
                              </span>
                              <span className="text-sm text-gray-500">{response.timeAgo}</span>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-2">{response.text}</p>
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500">
                              <Heart className="w-3 h-3" />
                              <span className="text-xs">{response.likes}</span>
                            </button>
                            <button className="text-xs text-gray-600 hover:text-blue-500">Reply</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Reply Input */}
                  <div className="ml-4 sm:ml-8 flex items-start space-x-3">
                    <img
                      src="/ui/avatar-4.png"
                      alt="Your avatar"
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex-shrink-0"
                    />
                    <div className="flex-1">
                      <textarea
                        placeholder="Write your reply..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none text-sm"
                      />
                      <div className="flex justify-end mt-2">
                        <button
                          onClick={() => handleReply(discussion.id)}
                          className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* My Courses Sidebar */}
        <aside className="w-80 bg-white border-l border-gray-200 p-6 hidden xl:block">
          <h2 className="text-xl font-bold text-gray-900 mb-6">My courses</h2>
          <div className="space-y-4">
            {myCourses.map((course, index) => (
              <div
                key={index}
                className={`rounded-xl p-4 border shadow-sm ${
                  course.isActive ? 'bg-teal-50 border-teal-200' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{course.subtitle}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{course.lessons}</span>
                      <span className="text-gray-600">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className={`h-2 rounded-full ${course.progressColor}`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}

export default DiscussionsPage
