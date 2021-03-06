/*Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.*/

var maxSubArray = function(nums) {
  var max = nums[0];
  var current = nums[0];
  var start = 0;
  var end = 0;
  for(var i = 1; i<nums.length; i++){
      if(max > nums[i] && current >= current + nums[i]){
          current = current + nums[i]
          start = i
          end = i
      }else{
        current = current + nums[i]
        if(current < nums[i]){
          current = nums[i]
        }
      }
      if(max < current){
          max = current;
          end = i
      }
   
  }

   return max; 
}
    

maxSubArray([4,-1,2,1])