<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_datas', function (Blueprint $table) {

            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('email');
            $table->unsignedInteger('country_id'); // Add the country_id column
            $table->foreign('country_id')->references('id')->on('countries')->onDelete('cascade');
            $table->unsignedInteger('states_id'); // Add the country_id column
            $table->foreign('states_id')->references('id')->on('states')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users_tables');
    }
};
