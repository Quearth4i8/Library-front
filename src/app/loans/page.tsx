import Link from "next/link";

const sampleLoans = [
  {
    id: 1,
    bookTitle: "The Great Gatsby",
    memberName: "John Smith",
    checkoutDate: "2024-01-15",
    dueDate: "2024-02-15",
    returnDate: null,
    status: "Active",
  },
  {
    id: 2,
    bookTitle: "To Kill a Mockingbird",
    memberName: "Sarah Johnson",
    checkoutDate: "2024-01-10",
    dueDate: "2024-02-10",
    returnDate: "2024-01-25",
    status: "Returned",
  },
  {
    id: 3,
    bookTitle: "1984",
    memberName: "Michael Brown",
    checkoutDate: "2024-01-20",
    dueDate: "2024-02-20",
    returnDate: null,
    status: "Active",
  },
  {
    id: 4,
    bookTitle: "The Hobbit",
    memberName: "David Wilson",
    checkoutDate: "2024-01-05",
    dueDate: "2024-02-05",
    returnDate: null,
    status: "Overdue",
  },
  {
    id: 5,
    bookTitle: "Pride and Prejudice",
    memberName: "Emily Davis",
    checkoutDate: "2024-01-12",
    dueDate: "2024-02-12",
    returnDate: "2024-01-30",
    status: "Returned",
  },
];

export default function LoansPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Loans</h1>
            </div>
            <Link
              href="/loans/new"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              New Loan
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search loans by book title or member name..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="returned">Returned</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
        </div>

        {/* Loans Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleLoans.map((loan) => (
            <div key={loan.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  loan.status === "Active" 
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                    : loan.status === "Returned"
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                }`}>
                  {loan.status}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{loan.bookTitle}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Borrowed by: {loan.memberName}</p>
              
              <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <p>Checkout: {new Date(loan.checkoutDate).toLocaleDateString()}</p>
                <p>Due: {new Date(loan.dueDate).toLocaleDateString()}</p>
                {loan.returnDate && (
                  <p>Returned: {new Date(loan.returnDate).toLocaleDateString()}</p>
                )}
              </div>
              
              <div className="flex gap-2">
                {loan.status === "Active" && (
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                    Return Book
                  </button>
                )}
                {loan.status === "Overdue" && (
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                    Return Book
                  </button>
                )}
                <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 disabled:opacity-50">
              Previous
            </button>
            <button className="px-3 py-2 bg-purple-600 text-white rounded-lg">1</button>
            <button className="px-3 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">2</button>
            <button className="px-3 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">3</button>
            <button className="px-3 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              Next
            </button>
          </nav>
        </div>
      </main>
    </div>
  );
} 