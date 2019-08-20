
function createCourses(course_name, course_number,credit_points,prereqs)
{
  var course = {};
  course.name = course_name;
  course.course_num = course_number;
  course.credit_points = credit_points;
  course.prereqs = prereqs;

  course.toString = function(){return this.name + " with course number " + this.course_num +
" has " + this.credit_points + " credit points ";};
  course.equals = function(courseobj)
  {
    return courseobj.course_num == this.course_num
  };
  course.isPrior = function(courseobj){
    for (var index = 0; index < this.prereqs.length;index++)
    {
      if (this.prereqs[index] == courseobj.course_num)
      {
        return true;
      }
    }
    return false;
  };
  return course;
}
