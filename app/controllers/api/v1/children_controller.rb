class Api::V1::ChildrenController < ApplicationController
    before_action :set_child, only: [:show, :edit, :update, :destroy]

    # GET /children
    # GET /children.json
    def index
      @children = Child.all.order(name: :asc)
      render json: @children
    end
  
    # GET /children/1
    # GET /children/1.json
    def show
      if @child
        render json: @child
      else
        render json: @child.errors
      end
    end
  
    # GET /children/new
    def new
      @child = Child.new
    end
  
    # GET /children/1/edit
    def edit
    end
  
    # POST /children
    # POST /children.json
    def create
      @child = Child.new(child_params)
  
      if @child.save
        render json: @child
      else
        render json: @child.errors
      end

      render json: { notice: 'Child was successfully created.' }
    end
  
    # PATCH/PUT /children/1
    # PATCH/PUT /children/1.json
    def update
        if @child.update
            render json: @child
        else
            render json: @child
        end

      render json: { notice: 'Child was successfully updated.' }
    end
  
    # DELETE /children/1
    # DELETE /children/1.json
    def destroy
      @child.destroy
  
      render json: { notice: 'Child was successfully removed.' }
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_child
        @child = Child.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def child_params
        params.permit(:name, :surname, :group, :breakfast, :souptime, :sleep, :secondcourse, :snack, :supplies, :comment, :dates)
      end
  end