import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Arjun Joy',
    role: 'Landscape Service',
    content:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book the industry\'s standard dummy text ever since the 1500s, when an',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Interior Designer',
    content:
      'Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched. They transformed our vision into reality with remarkable precision.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
  },
];

export default function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-[93rem] mx-auto p-8 bg-[#E6D5C3] rounded-3xl">
      <div className="flex justify-between items-start mb-8">
        <h2 className="text-4xl font-bold text-black">
          What our
          <br />
          Customers say
        </h2>
        <div className="flex gap-4">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="relative">
        <Quote className="absolute -top-4 -left-2 w-8 h-8 text-black/20" />
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-800 text-lg leading-relaxed">
            {testimonials[currentIndex].content}
          </p>
          <div className="flex items-center gap-4 mt-6">
            <img
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}