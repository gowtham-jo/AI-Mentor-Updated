import React, { useState } from 'react';
import { Search, Bell, Clock, CheckCircle, TrendingUp, Flame, Play, MoreVertical, ChevronDown } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const WatchedVideos = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [courseFilter, setCourseFilter] = useState('All Courses');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [sortBy, setSortBy] = useState('Most Recent');

  // Mock data for video cards
  const videoData = [
    {
      id: 1,
      title: "Introduction to Neural Networks",
      course: "Machine Learning Fundamentals",
      duration: "15:42",
      progress: 80,
      status: "in-progress",
      lastWatched: "2 days ago",
      thumbnail: "/AI_Tutor_New_UI/Watched_Videos/intro_to_neural_networks.png"
    },
    {
      id: 2,
      title: "Deep Learning Architectures",
      course: "Advanced Deep Learning",
      duration: "22:15",
      progress: 100,
      status: "completed",
      lastWatched: "1 week ago",
      thumbnail: "/AI_Tutor_New_UI/Watched_Videos/deep_learning_architectures.png"
    },
    {
      id: 3,
      title: "Data Visualization Techniques",
      course: "Data Science Essentials",
      duration: "18:30",
      progress: 33,
      status: "in-progress",
      lastWatched: "3 days ago",
      thumbnail: "/AI_Tutor_New_UI/Watched_Videos/data_visualization_techniques.png"
    },
    {
      id: 4,
      title: "Python for Machine Learning",
      course: "Programming Fundamentals",
      duration: "25:45",
      progress: 100,
      status: "completed",
      lastWatched: "5 days ago",
      thumbnail: "/AI_Tutor_New_UI/Watched_Videos/programming_fundamentals.png"
    },
    {
      id: 5,
      title: "AI Ethics and Bias",
      course: "AI Fundamentals",
      duration: "30:12",
      progress: 60,
      status: "in-progress",
      lastWatched: "1 day ago",
      thumbnail: "/AI_Tutor_New_UI/Watched_Videos/ai_fundamentals.png"
    },
    {
      id: 6,
      title: "Computer Vision Basics",
      course: "Computer Vision Course",
      duration: "20:08",
      progress: 100,
      status: "completed",
      lastWatched: "1 week ago",
      thumbnail: "/AI_Tutor_New_UI/Watched_Videos/computer_vision.png"
    }
  ];

  // Filtered videos based on search and filters
  const filteredVideos = videoData.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.course.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCourse = courseFilter === 'All Courses' || video.course === courseFilter;
    const matchesStatus = statusFilter === 'All Status' ||
                         (statusFilter === 'Completed' && video.status === 'completed') ||
                         (statusFilter === 'In Progress' && video.status === 'in-progress');
    return matchesSearch && matchesCourse && matchesStatus;
  });

  const MetricsCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Total Hours */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-sm font-normal mb-1">Total Hours</p>
            <p className="text-slate-900 text-2xl font-bold">47.5h</p>
          </div>
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <Clock className="w-4 h-4 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Videos Completed */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-sm font-normal mb-1">Videos Completed</p>
            <p className="text-slate-900 text-2xl font-bold">142</p>
          </div>
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-green-600" />
          </div>
        </div>
      </div>

      {/* Avg Session */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-sm font-normal mb-1">Avg Session</p>
            <p className="text-slate-900 text-2xl font-bold">23min</p>
          </div>
          <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-indigo-600" />
          </div>
        </div>
      </div>

      {/* Learning Streak */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-sm font-normal mb-1">Learning Streak</p>
            <p className="text-slate-900 text-2xl font-bold">12 days</p>
          </div>
          <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
            <Flame className="w-4 h-4 text-orange-600" />
          </div>
        </div>
      </div>
    </div>
  );

  const SearchAndFilters = () => (
    <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm mb-6 lg:mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full lg:flex-1 lg:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search videos..."
            className="w-full h-[42px] pl-10 pr-4 border border-gray-200 rounded-lg text-slate-600 placeholder-slate-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <select
            className="h-[43px] px-3 pr-8 border border-gray-200 rounded-lg bg-white text-black w-full sm:min-w-[160px]"
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
          >
            <option>All Courses</option>
            <option>Machine Learning Fundamentals</option>
            <option>Advanced Deep Learning</option>
            <option>Data Science Essentials</option>
            <option>Programming Fundamentals</option>
            <option>AI Fundamentals</option>
            <option>Computer Vision Course</option>
          </select>
          <select
            className="h-[43px] px-3 pr-8 border border-gray-200 rounded-lg bg-white text-black w-full sm:min-w-[120px]"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Completed</option>
            <option>In Progress</option>
          </select>
          <select
            className="h-[43px] px-3 pr-8 border border-gray-200 rounded-lg bg-white text-black w-full sm:min-w-[140px]"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Most Recent</option>
            <option>Oldest First</option>
            <option>Title A-Z</option>
            <option>Title Z-A</option>
          </select>
        </div>
      </div>
    </div>
  );

  const VideoCard = ({ video }) => (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Video Thumbnail */}
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
          <div 
            className={`h-full ${video.status === 'completed' ? 'bg-green-500' : 'bg-orange-500'}`}
            style={{ width: `${video.progress}%` }}
          ></div>
        </div>
      </div>
      
      {/* Video Info */}
      <div className="p-4">
        <h3 className="text-slate-900 text-base font-semibold mb-1 line-clamp-1">{video.title}</h3>
        <p className="text-slate-500 text-sm mb-3">{video.course}</p>
        
        <div className="flex justify-between items-center text-xs text-slate-500 mb-4">
          <span className={video.status === 'completed' ? 'text-green-600 font-medium' : ''}>
            {video.status === 'completed' ? 'Completed' : `${video.progress}% Complete`}
          </span>
          <span>{video.lastWatched}</span>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            className={`flex-1 h-10 rounded-lg text-sm font-medium ${
              video.status === 'completed'
                ? 'bg-gray-100 text-slate-900'
                : 'bg-orange-500 text-white'
            }`}
            onClick={() => console.log(video.status === 'completed' ? 'Rewatching' : 'Resuming', video.title)}
          >
            {video.status === 'completed' ? 'Rewatch' : 'Resume'}
          </button>
          <button
            className="w-7 h-10 flex items-center justify-center text-slate-500"
            onClick={() => console.log('More options for', video.title)}
          >
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        activePage="watched"
      />

      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-80'
      }`}>
        {/* Header */}
        <Header />

        {/* Main Dashboard Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {/* Page Title */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-slate-900 text-2xl md:text-3xl font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Watched Videos
            </h1>
            <p className="text-slate-500 text-sm md:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Track your learning progress and manage your video history
            </p>
          </div>

          {/* Metrics Cards */}
          <MetricsCards />

          {/* Search and Filters */}
          <SearchAndFilters />

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
            {filteredVideos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default WatchedVideos;
