import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Download, 
  Eye, 
  Calendar,
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle,
  User,
  Phone,
  Mail
} from "lucide-react";

const TestReports = () => {
  const reports = [
    {
      id: "RPT-2024-001",
      petName: "Max",
      ownerName: "Rajesh Kumar",
      testType: "Complete Blood Count",
      date: "2024-01-15",
      status: "Ready",
      urgency: "Normal",
      downloadUrl: "#"
    },
    {
      id: "RPT-2024-002",
      petName: "Bella",
      ownerName: "Priya Sharma",
      testType: "Biochemistry Panel",
      date: "2024-01-14",
      status: "Ready",
      urgency: "High",
      downloadUrl: "#"
    },
    {
      id: "RPT-2024-003",
      petName: "Charlie",
      ownerName: "Amit Singh",
      testType: "X-Ray Chest",
      date: "2024-01-13",
      status: "Processing",
      urgency: "Normal",
      downloadUrl: "#"
    },
    {
      id: "RPT-2024-004",
      petName: "Luna",
      ownerName: "Sneha Gupta",
      testType: "Urine Analysis",
      date: "2024-01-12",
      status: "Ready",
      urgency: "Normal",
      downloadUrl: "#"
    },
    {
      id: "RPT-2024-005",
      petName: "Rocky",
      ownerName: "Vikram Yadav",
      testType: "Hormone Panel",
      date: "2024-01-11",
      status: "Ready",
      urgency: "Low",
      downloadUrl: "#"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Ready":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Ready</Badge>;
      case "Processing":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Processing</Badge>;
      case "Pending":
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case "High":
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case "Normal":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "Low":
        return <Clock className="w-4 h-4 text-blue-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Test Reports</h1>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Access and download your pet's diagnostic test reports. Enter your report ID or search by pet name to find your results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Search Section */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Search className="w-5 h-5 text-primary" />
                    <span>Find Your Report</span>
                  </CardTitle>
                  <CardDescription>
                    Enter your report ID or pet details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Report ID</label>
                    <Input placeholder="e.g., RPT-2024-001" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Pet Name</label>
                    <Input placeholder="Enter pet name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Owner Phone</label>
                    <Input placeholder="Enter phone number" />
                  </div>
                  <Button className="w-full btn-primary">
                    <Search className="w-4 h-4 mr-2" />
                    Search Reports
                  </Button>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Access</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Recent Reports
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Pending Results
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Download History
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Reports List */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Recent Reports</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-neutral-600">{reports.length} reports found</span>
                </div>
              </div>

              <div className="space-y-4">
                {reports.map((report) => (
                  <Card key={report.id} className="hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <FileText className="w-5 h-5 text-primary" />
                            <h3 className="font-semibold text-lg">{report.testType}</h3>
                            {getUrgencyIcon(report.urgency)}
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4 text-neutral-500" />
                              <div>
                                <p className="text-sm font-medium">{report.petName}</p>
                                <p className="text-xs text-neutral-600">{report.ownerName}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-neutral-500" />
                              <div>
                                <p className="text-sm font-medium">{report.date}</p>
                                <p className="text-xs text-neutral-600">Test Date</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-medium text-neutral-600">Report ID:</span>
                            <code className="bg-neutral-100 px-2 py-1 rounded text-sm font-mono">
                              {report.id}
                            </code>
                            {getStatusBadge(report.status)}
                          </div>
                        </div>

                        <div className="flex flex-col space-y-2 ml-6">
                          <Button 
                            size="sm" 
                            className="btn-primary"
                            disabled={report.status !== "Ready"}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            disabled={report.status !== "Ready"}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Help Section */}
              <Card className="mt-8 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="font-semibold mb-3">Need Help?</h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      Can't find your report or having trouble downloading? Contact our support team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">081589 33766</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">support@petlabsiliguri.com</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TestReports;