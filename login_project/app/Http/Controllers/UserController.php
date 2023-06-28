<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\user_data;
use App\Http\Controllers\Controller;
class UserController extends Controller
{
    public function submitForm(Request $request)
    {
        // Validate the incoming request data
       


        $validatedData = $request->validate([
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|email',
            'country_id' => 'required|exists:countries,id',
            'states_id' => 'required|exists:states,id',
        ]);



        // Create a new user record in the user_tables table
        $formData = new user_data();
        $formData->firstname = $validatedData['firstname'];
        $formData->lastname = $validatedData['lastname'];
        $formData->email = $validatedData['email'];
        $formData->country_id = $validatedData['country_id'];
        $formData->states_id = $validatedData['states_id'];

         // Save the form data into the database
         $formData->save();
         // Return a JSON response indicating success
         return response()->json(['message' => 'Form data saved successfully'], 201);
    }

}
