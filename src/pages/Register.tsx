import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { BadgeIcon as IdCard, Mail, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { backendUrl } from "../lib/links"

const Register = () => {
  const [banner, setBanner] = useState<string>("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    rollNo: "",
    collegeEmail: "",
    personalEmail: "",
    mobileNo: "",
  })
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    rollNo: "",
    collegeEmail: "",
    personalEmail: "",
    mobileNo: "",
  })
  const [isFormValid, setIsFormValid] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchEvent() {
      try {
        const res = await axios.get(`${backendUrl}/event/${id}`)
        if (res.data && res.data.length !== 0) {
          setBanner(res.data.event_banner)
        } else {
          navigate("/")
        }
      } catch (error) {
        console.error("Error fetching event:", error)
        navigate("/")
      }
    }
    fetchEvent()
  }, [id, navigate])

  const validateField = (name: string, value: string) => {
    let error = ""
    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) error = "This field is required"
        break
      case "rollNo":
        if (!value.trim()) error = "Roll number is required"
        else if (!/^\d{2}[A-Z]{4}\d{3}$/.test(value)) error = "Invalid roll number format"
        break
      case "collegeEmail":
      case "personalEmail":
        if (!value.trim()) error = "Email is required"
        else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email format"
        break
      case "mobileNo":
        if (!value.trim()) error = "Mobile number is required"
        else if (!/^\+?[1-9]\d{9,11}$/.test(value.replace(/\s+/g, ""))) error = "Invalid mobile number"
        break
      default:
        break
    }
    return error
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))

    const newErrors = { ...errors, [name]: error }
    const isValid =
      Object.values(newErrors).every((err) => err === "") &&
      Object.values({ ...formData, [name]: value }).every((val) => val.trim() !== "")
    setIsFormValid(isValid)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isFormValid) {
      try {
        // Replace with your actual API endpoint
        await axios.post(`${backendUrl}/register`, formData)
        alert("Registration successful!")
        navigate("/")
      } catch (error) {
        console.error("Registration failed:", error)
        alert("Registration failed. Please try again.")
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 overflow-auto flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white overflow-auto shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              {banner && (
                <img
                  src={banner || "/placeholder.svg"}
                  alt="Event Banner"
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
              )}
            </div>
            <div>
              <h1 className="text-2xl font-semibold mb-6 text-center">Registration Form</h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <User size={16} className="inline mr-2" />
                      First Name
                    </label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full ${errors.firstName ? "border-red-500" : ""}`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <User size={16} className="inline mr-2" />
                      Last Name
                    </label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full ${errors.lastName ? "border-red-500" : ""}`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <IdCard size={16} className="inline mr-2" />
                    RTU Roll No.
                  </label>
                  <Input
                    type="text"
                    name="rollNo"
                    value={formData.rollNo}
                    onChange={handleInputChange}
                    className={`w-full ${errors.rollNo ? "border-red-500" : ""}`}
                    placeholder="21EJCIT139"
                  />
                  {errors.rollNo && <p className="text-red-500 text-xs mt-1">{errors.rollNo}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Mail size={16} className="inline mr-2" />
                    College Email ID
                  </label>
                  <Input
                    type="email"
                    name="collegeEmail"
                    value={formData.collegeEmail}
                    onChange={handleInputChange}
                    className={`w-full ${errors.collegeEmail ? "border-red-500" : ""}`}
                    placeholder="john.doe@college.edu"
                  />
                  {errors.collegeEmail && <p className="text-red-500 text-xs mt-1">{errors.collegeEmail}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Mail size={16} className="inline mr-2" />
                    Personal Email ID
                  </label>
                  <Input
                    type="email"
                    name="personalEmail"
                    value={formData.personalEmail}
                    onChange={handleInputChange}
                    className={`w-full ${errors.personalEmail ? "border-red-500" : ""}`}
                    placeholder="john.doe@example.com"
                  />
                  {errors.personalEmail && <p className="text-red-500 text-xs mt-1">{errors.personalEmail}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Phone size={16} className="inline mr-2" />
                    Mobile No.
                  </label>
                  <Input
                    type="tel"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleInputChange}
                    className={`w-full ${errors.mobileNo ? "border-red-500" : ""}`}
                    placeholder="+91 92573-07752"
                  />
                  {errors.mobileNo && <p className="text-red-500 text-xs mt-1">{errors.mobileNo}</p>}
                </div>
                <div className="flex justify-end">
                  <Button type="submit" disabled={!isFormValid} className="px-10">
                    Register
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register